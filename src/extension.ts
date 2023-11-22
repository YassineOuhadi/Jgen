import * as vscode from 'vscode';
import * as fs from "fs";
import { EcoreTreeDataProvider, EcoreModel, EcoreNode } from "./treeview";
import * as path from "path";
import { MyMenuButtonsProvider } from './models/selectFileButton';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';
//import { parse } from 'jsonc-parser';
import { Attribute, Entity, Project } from './language-server/generated/ast';

let client: LanguageClient;
export let file = "";
let model: EcoreModel;
let ecoreTreeDataProvider: EcoreTreeDataProvider;
let treeView: vscode.TreeView<EcoreNode>;

interface JgenNode {
	project: ProjectNode;
}

interface ProjectNode {
	id: number;
	name: string;
	entities: { entity: EntityNode }[];
	relationships: { relationship: RelationshipNode }[];
	enums: { enum: EnumNode }[];
	repositories: { repository: RepositoryNode }[];
	services: { service: ServiceNode }[];
	controllers: { controller: ControllerNode }[];
	configuration: ConfigurationNode;
}

interface EntityNode {
	id: number;
	name: string;
	attributes: { attribute: AttributeNode }[];
}

interface RelationshipNode {
	id: number;
	from: string;
	to: string;
	type: string;
}

interface AttributeNode {
	id: number;
	name: string;
	type: string;
	primaryKey?: boolean;
	nullable?: boolean;
}

interface EnumNode {
	id: number;
	name: string;
	literals: { literal: EnumLiteralNode }[];
}

interface EnumLiteralNode {
	id: number;
	name: string;
	value: string;
}

interface QueryParameterNode {
	id: number;
	name: string;
	attribute: string;
}

interface QueryNode {
	id: number;
	name: string;
	type: string;
	parameters: { parameter: QueryParameterNode }[];
}

interface RepositoryNode {
	id: number;
	name: string;
	entity: string;
	queries: { query: QueryNode }[];
}

interface ServiceNode {
	id: number;
	name: string;
	entity: string;
	repository: string;
	methods: { method: MethodNode }[];
}

interface MethodNode {
	id: number;
	name: string;
	parameters: { parameter: QueryParameterNode }[];
}

interface ControllerNode {
	id: number;
	name: string;
	path: string;
	entity: string;
	service: string;
	routes: { route: RouteNode }[];
}

interface RouteNode {
	id: number;
	name: string;
	path: string;
	operation: string;
	requestParameters?: { requestParameter: RequestParameterNode }[];
	requestBody?: RequestBodyNode | null;
}

interface RequestParameterNode {
	id: number;
	name: string;
	attribute: string;
	isRequired: boolean;
}

interface RequestBodyNode {
	id: number;
	// name: string;
	parameters: { parameter: QueryParameterNode }[];
}

interface ConfigurationNode {
	id: number;
	metadata: MetadataNode;
	datasource: DatasourceNode;
	server: ServerNode;
}

interface MetadataNode {
	id: number;
	buildTool: string;
	springVersion: string;
	group: string;
	artifact: string;
	name: string;
	description: string;
	package: string;
	packaging: string;
	javaVersion: number;
}

interface DatasourceNode {
	id: number;
	type: string;
	host: string;
	port: number;
	database: string;
}

interface ServerNode {
	id: number;
	host: string;
	port: number;
}

export async function activate(context: vscode.ExtensionContext) {
	// Create the tree view
	client = startLanguageClient(context);

	let menuButtons = new MyMenuButtonsProvider();
	menuButtons.getChildren()?.forEach((button) => {
		button.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'img', 'blue-button.png'));
		button.description = "#0000FF";
	});

	let mytreeView = vscode.window.createTreeView("exampleView", { treeDataProvider: menuButtons });
	context.subscriptions.push(mytreeView);

	// select file button
	context.subscriptions.push(
		vscode.commands.registerCommand("mySelectFileButtonCommand", () => {
			vscode.window
				.showOpenDialog({
					canSelectMany: false,
					openLabel: "Select",
					filters: {
						"Jgen files": ["*"]
						//"Model files": ["*.model"]
					},
				})
				.then((fileUri) => {
					if (fileUri) {
						// you can use the path of the selected file to read its content
						let filePath = fileUri[0].fsPath;

						// Parse the JSON file and create the tree view nodes
						const workspaceRoot =
							vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0 ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
						if (!workspaceRoot) {
							console.log("ERROR: workspaceRoot is undefined");
							return [];
						}
						const filename = "\\test2.model";

						/*const selectedFile = await vscode.window.showOpenDialog({
							canSelectMany: false,
							filters: {
							'Model files': ['model']
							}
						}); */
						if (filePath == undefined) {
							filePath = workspaceRoot + filename;
						}

						file = filePath;

						context.subscriptions.splice(context.subscriptions.indexOf(mytreeView), 1);
						model = convertJsonToEcoreModel(file);

						ecoreTreeDataProvider = new EcoreTreeDataProvider(model);
						vscode.commands.registerCommand('JGEN.refreshEntry', () => ecoreTreeDataProvider.refresh());

						vscode.window.registerTreeDataProvider('exampleView', ecoreTreeDataProvider);

						treeView = vscode.window.createTreeView('exampleView', { treeDataProvider: ecoreTreeDataProvider });
						context.subscriptions.push(treeView);

						vscodeMDE(context, filePath);
					} else { return []; }
				});
		})
	);

	// create new file button
	context.subscriptions.push(vscode.commands.registerCommand("myCreateFileButtonCommand", () => {
		vscode.window.showInputBox({ placeHolder: "Enter file name" }).then((fileName) => {
			if (fileName) {
				// you can use the path of the selected file to read its content
				let options = {
					canSelectFolders: true,
					canSelectMany: false,
					openLabel: 'Select a folder'
				};

				vscode.window.showOpenDialog(options).then(folderUri => {
					if (folderUri) {
						let folderPath = folderUri[0].fsPath;
						// Use the folderPath variable to create the new file in the selected directory
						let filePath = path.join(folderPath, `${fileName}.jgen`);

						// Create the new file with initial content
						fs.writeFileSync(filePath, parseJSONToJgenFormat(initializrJgenFile(fileName)));

						// Open the newly created file in VS Code
						vscode.workspace.openTextDocument(filePath).then(doc => {
							vscode.window.showTextDocument(doc);
						});

						console.log(`Selected folder: ${folderPath}`);
						vscode.window.showInformationMessage("New file created: " + filePath);
						// vscode.window.showInformationMessage("New file created: " + folderPath + "\\" + fileName + ".jgen");
					} else {
						vscode.window.showErrorMessage("The selected folder is not a valid directory. Please select a valid directory.");
						console.log(">>>>> The selected folder is not a valid directory. Please select a valid directory.");
					}
				});
			}
		});
	}));
}

// create new file button

//import file button

async function vscodeMDE(context: vscode.ExtensionContext, selectFile: string) {
	context.subscriptions.push(treeView.onDidChangeSelection(async (event) => {
		if (event.selection.length > 0) {
			const selectedNode: EcoreNode = event.selection[0];
			console.log("selected node", selectedNode);
			const actions = [];

			if (event.selection) {
				switch (selectedNode.type) {
					case 'project':
						// case 'VPackage':
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Package', command: 'JGEN.addPackage' });
						actions.push({ label: 'Add Class ', command: 'JGEN.addClass' });
						actions.push({ label: 'Add Enumeration', command: 'JGEN.addEnumeration' });
						actions.push({ label: 'Add Data Type', command: 'JGEN.addDataType' });
						break;
					case 'entity':
						actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						//actions.push({ label: 'Add Association', command: 'JGEN.addAssociation' });
						actions.push({ label: 'Add Super Type', command: 'JGEN.addGeneralization' });
						//actions.push({ label: 'Add Constraint', command: 'JGEN.addConstraint' });
						actions.push({ label: 'Add Attribute', command: 'JGEN.addAttribute' });
						actions.push({ label: 'Add Operation', command: 'JGEN.addOperation' });
						actions.push({ label: 'Add Reference', command: 'JGEN.addReference' });
						actions.push({ label: 'Add Annotation', command: 'JGEN.addAnnotation' });
						break;
					case 'attribute':
						actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Annotation', command: 'JGEN.addAnnotation' });
						break;
					case 'relationship':
						actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Annotation', command: 'JGEN.addAnnotation' });
						break;
					default:
						break;
				}
				const result = await vscode.window.showQuickPick(actions);
				if (result) {
					vscode.commands.executeCommand(result.command, selectedNode);
				}
			}
		}
	}));

	//
	// Listen for when the file is saved
	vscode.workspace.onDidSaveTextDocument(event => {
		// Check if the saved file is the one that the tree view is reading from
		if (event.fileName === selectFile) {
			// Refresh the tree view
			vscode.window.showErrorMessage(`File has changed manually. Please reupload it again to take the changes into consideration.`);
			//treeView.reveal(treeView.selection[0], { select: true, focus: true });
		}
	});

	let commandName;
	const existingCommands = await vscode.commands.getCommands();

	//rename node
	commandName = 'JGEN.rename';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, async (node: EcoreNode) => {
			const result = await vscode.window.showInputBox({ prompt: `Rename ${node.getName()}` });
			if (result) {
				node.setName(result);
				ecoreTreeDataProvider?.getonDidChangeTreeData().fire;
				vscode.window.showInformationMessage(`Renamed node to ${node.getName()}`);

				//save changes to json
				saveRenameDeleteChangesToJSON("rename", node);
			}
		}));
	}

	//add attribute
	commandName = 'JGEN.addAttribute';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, async (node: EcoreNode) => {
			vscode.window.showInformationMessage(`Add Attribute`);
			const newname = await vscode.window.showInputBox({ prompt: `New Attribute Name: ` });
			let newAttribute = new EcoreNode('attribute', newname ? newname : 'New Attribute');
			newAttribute.setParent(node);
			node.getChildren().push(newAttribute);
			ecoreTreeDataProvider.getonDidChangeTreeData().fire;

			//save changes to json
			saveAddChangesToJSON(newAttribute);
		}));
	}
}

export function deactivate(): Thenable<void> | undefined {
	if (client) {
		return client.stop();
	}
	return undefined;
}

function initializrJgenFile(project: string): JgenNode {
	let i = 0;
	const jsonResult: JgenNode = {
		project: {
			id: i++,
			name: project,
			entities: [],
			relationships: [],
			enums: [],
			repositories: [],
			services: [],
			controllers: [],
			configuration: {
				id: i++,
				metadata: {
					id: i++,
					buildTool: '',
					springVersion: '',
					group: '',
					artifact: '',
					name: '',
					description: '',
					package: '',
					packaging: '',
					javaVersion: 0,
				},
				datasource: {
					id: i++,
					type: '',
					host: '',
					port: 0,
					database: '',
				},
				server: {
					id: i++,
					host: '',
					port: 0,
				},
			},
		}
	};
	return jsonResult;
}

function startLanguageClient(context: vscode.ExtensionContext): LanguageClient {
	const serverModule = context.asAbsolutePath(path.join('out', 'language-server', 'main'));
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging.
	// By setting `process.env.DEBUG_BREAK` to a truthy value, the language server will wait until a debugger is attached.
	const debugOptions = { execArgv: ['--nolazy', `--inspect${process.env.DEBUG_BREAK ? '-brk' : ''}=${process.env.DEBUG_SOCKET || '6009'}`] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	};

	const fileSystemWatcher = vscode.workspace.createFileSystemWatcher('**/*.jgen');//HERE
	context.subscriptions.push(fileSystemWatcher);

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'jgen' }],
		synchronize: {
			// Notify the server about file changes to files contained in the workspace
			fileEvents: fileSystemWatcher
		}
	};

	// Create the language client and start the client.
	const client = new LanguageClient(
		'jgen',
		'jgen',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
	return client;
}

function convertJsonToEcoreModel(selectFile: string): EcoreModel {
	if (pathExists(selectFile!) && selectFile) {
		let vcoreString = fs.readFileSync(selectFile, "utf8");
		//const vcoreString = fs.readFileSync(selectedFile[0].fsPath, "utf8");

		const jsonRepresentation = parseJgenJson(vcoreString);

		try {

			//const json = parse(vcoreString);
			//let json = JSON.stringify(jsonRepresentation, null, 4);
			let json = jsonRepresentation;
			console.log("json is :", json);

			// const vcoreModel = this.convertJsonToModel(vcoreJson);
			if (!json) {
				vscode.window.showErrorMessage("JSON undefined");
				console.log("JSON undefined : " + json);
				return new EcoreModel([]);
			}
			else {
				const model = transformJsonToTree(json);
				return model;
			}
		} catch (error) {
			vscode.window.showErrorMessage("An error occurred while parsing the JSON file");

			return new EcoreModel([]);
		}
	} else {
		return new EcoreModel([
			new EcoreNode('project', 'EModel', [
				new EcoreNode('entity', 'My Class', [
					new EcoreNode('attribute', 'My Attribute'),
					// new EcoreNode('VReference', 'My Reference'),
					// new EcoreNode('VDataType', 'My Data Type'),
				]),
				new EcoreNode('entity', 'entity 2')]),
		]);
	}
}

export function parseJgenJson(dsl: string): JgenNode {
	const result: JgenNode = {
		project: {
			id: 0,
			name: '',
			entities: [],
			relationships: [],
			enums: [],
			repositories: [],
			services: [],
			controllers: [],
			configuration: {
				id: 0,
				metadata: {
					id: 0,
					buildTool: '',
					springVersion: '',
					group: '',
					artifact: '',
					name: '',
					description: '',
					package: '',
					packaging: '',
					javaVersion: 0,
				},
				datasource: {
					id: 0,
					type: '',
					host: '',
					port: 0,
					database: '',
				},
				server: {
					id: 0,
					host: '',
					port: 0,
				},
			},
		},
	};

	const lines = dsl.split('\n').map((line) => line.trim());

	let currentEntity: EntityNode | null = null;
	let currentEnum: EnumNode | null = null;
	let currentRepository: RepositoryNode | null = null;
	let currentService: ServiceNode | null = null;
	let currentController: ControllerNode | null = null;

	let currentQuery: QueryNode | null = null;
	let currentMethod: MethodNode | null = null;
	let currentRoute: RouteNode | null = null;

	let currentId = 1;
	let isExternalRepositoryAppel = true;
	let isExternalServiceAppel = true;
	// let isExternalControllerAppel = true;
	let isQueryTypeAppel = true;
	let isControllerPathAppel = true;
	let isConfigServerAppel = true;

	for (const line of lines) {

		if (isExternalServiceAppel && line.startsWith('service')) {
			isExternalRepositoryAppel = false;
		} else if (line.startsWith('entity')
			// || line.startsWith('repository')
			|| line.startsWith('enum')
			|| line.startsWith('relationship')
			|| line.startsWith('controller')
			|| line.startsWith('configuration')) {
			isExternalRepositoryAppel = true; // not in service
		};

		if (line.startsWith('controller')) {
			isExternalServiceAppel = false;
		} else if (line.startsWith('entity')
			|| line.startsWith('enum')
			|| line.startsWith('relationship')
			|| line.startsWith('repository')
			//   || line.startsWith('service') 
			|| line.startsWith('configuration')) {
			isExternalServiceAppel = true; // not in controller
		};

		if (line.startsWith('query')) {
			isQueryTypeAppel = true;
		} else if (line.startsWith('configuration')) {
			isQueryTypeAppel = false;
		};

		if (line.startsWith('controller')) {
			isControllerPathAppel = true;
		} else if (line.startsWith('route')) {
			isControllerPathAppel = false;
		};

		if (line.startsWith('datasource')) {
			isConfigServerAppel = false;
		} else if (line.startsWith('server')) {
			isConfigServerAppel = true;
		};

		if (line.startsWith('project')) {
			result.project.name = line.split('project ')[1].replace(":", "").trim();
		} else if (line.startsWith('enum')) {
			currentEnum = {
				id: currentId++,
				name: line.split('enum ')[1].replace(":", "").trim(),
				literals: [],
			};
			result.project.enums.push({ enum: currentEnum });
		} else if (line.startsWith('literal')) {
			if (currentEnum) {
				const literalParts = line.split('literal ')[1].trim().split(' ');
				const literal: EnumLiteralNode = {
					id: currentId++,
					name: literalParts[0],
					value: literalParts[2]
				};
				currentEnum.literals.push({ literal });
			}
		} else if (line.startsWith('entity')) {
			currentEntity = {
				id: currentId++,
				name: line.split('entity ')[1].replace(":", "").trim(),
				attributes: [],
			};
			result.project.entities.push({ entity: currentEntity });
		} else if (line.startsWith('attribute')) {
			if (currentEntity) {
				const attributeParts = line.split('attribute ')[1].trim().split(' ');
				const attribute: AttributeNode = {
					id: currentId++,
					name: attributeParts[0],
					type: attributeParts[1],
					primaryKey: attributeParts.includes('primaryKey'),
					nullable: attributeParts.includes('nullable'),
				};
				currentEntity.attributes.push({ attribute });
			}
		} else if (line.startsWith('relationship')) {
			const relationshipParts = line.split('relationship ')[1].trim().split(' ');
			const relationship: RelationshipNode = {
				id: currentId++,
				from: relationshipParts[2],
				to: relationshipParts[4],
				type: relationshipParts[0],
			};
			result.project.relationships.push({ relationship });
		} else if (line.startsWith('repository')) {
			if (isExternalRepositoryAppel) {
				currentRepository = {
					id: currentId++,
					name: line.split('repository ')[1].split(' for')[0].trim(),
					entity: line.includes('for') ? line.split('for ')[1].replace(":", "").trim() : '',
					queries: [],
				};
				result.project.repositories.push({ repository: currentRepository });
			} else if (currentService) {
				const repositoryParts = line.split('repository ')[1].trim().split(' ');
				currentService.repository = repositoryParts[0];
			}
		} else if (line.startsWith('query')) {
			if (currentRepository) {
				const queryParts = line.split('query ')[1].trim().split(' ');
				currentQuery = {
					id: currentId++,
					name: queryParts[0],
					type: '',
					parameters: [],
				};
				currentRepository.queries.push({ query: currentQuery });
			}
		} else if (line.startsWith('type')) {
			const typeParts = line.split('type ')[1].trim().split(' ');
			if (currentQuery && isQueryTypeAppel) {
				currentQuery.type = typeParts[0];
			} else {
				result.project.configuration.datasource.type = typeParts[0];
			}
		} else if (line.startsWith('parameter')) {
			if (isExternalRepositoryAppel && isExternalServiceAppel) {
				// not in service & not in controller => in repository => in query
				if (currentQuery) {
					const parameterParts = line.split('parameter ')[1].trim().split(' ');
					const parameter: QueryParameterNode = {
						id: currentId++,
						name: parameterParts[0],
						attribute: parameterParts[2],
					};
					currentQuery.parameters.push({ parameter });
				}
			} else if (isExternalRepositoryAppel) {
				// not in service => in controller => in route => in requestBody
				if (currentRoute) {
					const parameterParts = line.split('parameter ')[1].trim().split(' ');
					const parameter: QueryParameterNode = {
						id: currentId++,
						name: parameterParts[0],
						attribute: parameterParts[2],
					};
					if (!currentRoute.requestBody) {
						currentRoute.requestBody = {
							id: currentId++,
							parameters: [],
						};
					}
					currentRoute.requestBody.parameters.push({ parameter });
				}
			} else {
				// not in cotroller => in service => in method
				if (currentMethod) {
					const parameterParts = line.split('parameter ')[1].trim().split(' ');
					const parameter: QueryParameterNode = {
						id: currentId++,
						name: parameterParts[0],
						attribute: parameterParts[2],
					};
					currentMethod.parameters.push({ parameter });
				}
			}
		} else if (line.startsWith('service')) {
			if (isExternalServiceAppel) {
				const serviceNameParts = line.split('service ')[1].split(' for ');
				const serviceName = serviceNameParts[0].trim();
				const serviceEntity = serviceNameParts[1] ? serviceNameParts[1].replace(":", "").trim() : '';
				currentService = {
					id: currentId++,
					name: serviceName,
					entity: serviceEntity,
					repository: '',
					methods: [],
				};
				result.project.services.push({ service: currentService });
			} else if (currentController) {
				const serviceParts = line.split('service ')[1].trim().split(' ');
				currentController.service = serviceParts[0];
			}
		} else if (line.startsWith('method')) {
			if (currentService) {
				const methodParts = line.split('method ')[1].trim().split(' ');
				currentMethod = {
					id: currentId++,
					name: methodParts[0],
					parameters: [],
				};
				currentService.methods.push({ method: currentMethod });
			}
		} else if (line.startsWith('controller')) {
			const controllerNameParts = line.split('controller ')[1].split(' for ');
			const controllerName = controllerNameParts[0].trim();
			const controllerEntity = controllerNameParts[1] ? controllerNameParts[1].replace(":", "").trim() : '';
			currentController = {
				id: currentId++,
				name: controllerName,
				path: '',
				entity: controllerEntity,
				service: '',
				routes: [],
			};
			result.project.controllers.push({ controller: currentController });
		} else if (line.startsWith('route')) {
			if (currentController) {
				const routeParts = line.split('route ')[1].trim().split(' ');
				currentRoute = {
					id: currentId++,
					name: routeParts[0],
					path: '',
					operation: '',
					requestParameters: [],
					requestBody: null,
				};
				currentController.routes.push({ route: currentRoute });
			}
		} else if (line.startsWith('path')) {
			const pathParts = line.split('path ')[1].trim().split(' ');
			if (currentController && isControllerPathAppel) { // controller       
				currentController.path = pathParts[0];
			} else if (currentRoute) { // route
				currentRoute.path = pathParts[0];
			}
		} else if (line.startsWith('operation')) {
			if (currentRoute) { // route    
				const operationParts = line.split('operation ')[1].trim().split(' ');
				currentRoute.operation = operationParts[0];
			}
		} else if (line.startsWith('requestParameter')) {
			if (currentRoute) {
				const parameterParts = line.split('requestParameter ')[1].trim().split(' ');
				const parameter: RequestParameterNode = {
					id: currentId++,
					name: parameterParts[0],
					attribute: parameterParts[2],
					isRequired: parameterParts.includes('required'),
				};
				currentRoute.requestParameters!.push({ requestParameter: parameter });
			}
		} else if (line.startsWith('configuration')) {
			result.project.configuration.id = currentId++;
		} else if (line.startsWith('metadata')) {
			result.project.configuration.metadata.id = currentId++;
		} else if (line.startsWith('buildTool')) {
			result.project.configuration.metadata.buildTool = line.split('buildTool ')[1].trim().split(' ')[0];
		} else if (line.startsWith('springVersion')) {
			result.project.configuration.metadata.springVersion = line.split('springVersion ')[1].trim().split(' ')[0];
		} else if (line.startsWith('group')) {
			result.project.configuration.metadata.group = line.split('group ')[1].trim().split(' ')[0];
		} else if (line.startsWith('artifact')) {
			result.project.configuration.metadata.artifact = line.split('artifact ')[1].trim().split(' ')[0];
		} else if (line.startsWith('name')) {
			result.project.configuration.metadata.name = line.split('name ')[1].trim().split(' ')[0];
		} else if (line.startsWith('description')) {
			result.project.configuration.metadata.description = line.split('description ')[1].trim().replace(/^"(.*)"$/, '$1');
		} else if (line.startsWith('package')) {
			result.project.configuration.metadata.package = line.split('package ')[1].trim().split(' ')[0];
		} else if (line.startsWith('packaging')) {
			result.project.configuration.metadata.packaging = line.split('packaging ')[1].trim().split(' ')[0];
		} else if (line.startsWith('javaVersion')) {
			result.project.configuration.metadata.javaVersion = parseInt(line.split('javaVersion ')[1].trim().split(' ')[0], 10);
		} else if (line.startsWith('datasource')) {
			result.project.configuration.datasource.id = currentId++;
		} else if (line.startsWith('server')) {
			result.project.configuration.server.id = currentId++;
		} else if (line.startsWith('database')) {
			result.project.configuration.datasource.database = line.split('database ')[1].trim().split(' ')[0];
		} else if (line.startsWith('host')) {
			if (isConfigServerAppel) {
				result.project.configuration.server.host = line.split('host ')[1].trim().split(' ')[0];
			} else {
				result.project.configuration.datasource.host = line.split('host ')[1].trim().split(' ')[0];
			}
		} else if (line.startsWith('port')) {
			result.project.configuration.server.id = currentId++;
			if (isConfigServerAppel) {
				result.project.configuration.server.port = parseInt(line.split('port ')[1].trim().split(' ')[0], 10);
			} else {
				result.project.configuration.datasource.port = parseInt(line.split('port ')[1].trim().split(' ')[0], 10);
			}
		}
	}

	return result;
}

function parseJSONToJgenFormat(data: JgenNode): string {
	const { project } = data;
	const { name, entities, relationships, enums, repositories, services } = project;

	const entityStrings = entities.map(({ entity }) => {
		const { name: entityName, attributes } = entity;
		const attributeStrings = attributes.map(({ attribute }) => {
			const { name: attributeName, type, primaryKey, nullable } = attribute;
			let attributeString = `\tattribute ${attributeName} type ${type}`;

			if (primaryKey) {
				attributeString += ' primaryKey';
			} else if (nullable) {
				attributeString += ' nullable';
			}

			return attributeString;
		}).join('\n');

		return `entity ${entityName} {\n${attributeStrings}\n}`;
	}).join('\n\n');

	const relationshipStrings = relationships.map(({ relationship }) => {
		const { from, to, type } = relationship;
		return `relationship ${type} from ${from} to ${to}`;
	}).join('\n');

	const enumStrings = enums.map(({ enum: enumNode }) => {
		const { name: enumName, literals } = enumNode;
		const literalStrings = literals.map(({ literal }) => {
			const { name: literalName, value } = literal;
			return `\tliteral ${literalName} value ${value}`;
		}).join('\n');

		return `enum ${enumName} {\n${literalStrings}\n}`;
	}).join('\n\n');

	const repositoryStrings = repositories.map(({ repository }) => {
		const { name: repositoryName, entity, queries } = repository;
		const queryStrings = queries.map(({ query }) => {
			const { name: queryName, type, parameters } = query;
			const parameterStrings = parameters.map(({ parameter }) => { // Adjust this line
				const { name: paramName, attribute } = parameter;
				let str = `\tparameter ${paramName} is ${attribute}`;
				return str;
			}).join('\n\t');

			return `query ${queryName} {\n\t\ttype ${type}\n\t${parameterStrings}\n\t}`;
		}).join('\n\n\t');

		return `repository ${repositoryName} for ${entity} {\n\t${queryStrings}\n}`;
	}).join('\n\n');

	const serviceStrings = services.map(({ service }) => {
		const { name: serviceName, entity: serviceEntity, repository: serviceRepository, methods } = service;
		//const repositoryName = service.repository; // Add the repository name here
		const methodStrings = methods.map(({ method }) => {
			const { name: methodName, parameters } = method;
			const parameterStrings = parameters.map(({ parameter }) => {
				const { name: paramName, attribute } = parameter;
				return `\tparameter ${paramName} is ${attribute}`;
			}).join('\n\t');

			return `method ${methodName} {\n\t${parameterStrings}\n\t}`;
		}).join('\n\n\t');

		return `service ${serviceName} for ${serviceEntity} {\n\trepository ${serviceRepository}\n\t${methodStrings}\n}`;
	}).join('\n\n');

	return `project ${name} {\n${enumStrings}\n\n${entityStrings}\n\n${relationshipStrings}\n\n${repositoryStrings}\n\n${serviceStrings}\n}`;
}

function transformJsonToTree(json: any): EcoreModel {
	//let i = 1;
	// Create the root EcoreNode
	const key = getChildKey(json);
	const name = json[key].name;

	const root = new EcoreNode('project', name);
	// root.setId((i++).toString());
	root.setId(json[key].id);

	// Create a recursive function to traverse the JSON object
	function parseJson(node: EcoreNode, json: any) {

		let lastId = 0;

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("enums")) {
			json.project.enums.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				// childNode.setId((i++).toString());
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("enum") && json.enum.hasOwnProperty("literals")) {
			json.enum.literals.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				// childNode.setId((i++).toString());
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		//

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("entities")) {
			json.project.entities.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				// childNode.setId((i++).toString());
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("entity") && json.entity.hasOwnProperty("attributes")) {
			json.entity.attributes.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				// childNode.setId((i++).toString());
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		//

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("relationships")) {
			json.project.relationships.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name; // ?
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("relationship") && json.relationship.hasOwnProperty("from") && json.relationship.hasOwnProperty("to")) {
			let fromChildNode = new EcoreNode('from', json.relationship.from);
			fromChildNode.setId((lastId++).toString());
			fromChildNode.setParent(node);
			node.getChildren().push(fromChildNode);
			parseJson(fromChildNode, json.relationship.from);

			let toChildNode = new EcoreNode('to', json.relationship.to);
			toChildNode.setId((lastId++).toString());
			toChildNode.setParent(node);
			node.getChildren().push(toChildNode);
			parseJson(toChildNode, json.relationship.to);
		}

		if (json.hasOwnProperty("relationship") && json.relationship.hasOwnProperty("type")) {
			let childNode = new EcoreNode('type', json.relationship.type);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		//

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("repositories")) {
			json.project.repositories.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("repository") && json.repository.hasOwnProperty("entity")) {
			let childNode = new EcoreNode('entity', json.repository.entity);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("repository") && json.repository.hasOwnProperty("queries")) {
			json.repository.queries.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("query") && json.query.hasOwnProperty("type")) {
			let childNode = new EcoreNode('type', json.query.type);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("query") && json.query.hasOwnProperty("parameters")) {
			json.query.parameters.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("parameter") && json.parameter.hasOwnProperty("attribute")) {
			let childNode = new EcoreNode('attribute', json.parameter.attribute);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			// parseJson(childNode, json.parameter.attribute);
		}

		//

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("services")) {
			json.project.services.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("service") && json.service.hasOwnProperty("entity")) {
			let childNode = new EcoreNode('entity', json.service.entity);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("service") && json.service.hasOwnProperty("repository")) {
			let childNode = new EcoreNode('repository', json.service.repository);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("service") && json.service.hasOwnProperty("methods")) {
			json.service.methods.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("method") && json.method.hasOwnProperty("parameters")) {
			json.method.parameters.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		//

		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("controllers")) {
			json.project.controllers.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("controller") && json.controller.hasOwnProperty("entity")) {
			let childNode = new EcoreNode('entity', json.controller.entity);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("controller") && json.controller.hasOwnProperty("service")) {
			let childNode = new EcoreNode('service', json.controller.service);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
		}

		if (json.hasOwnProperty("controller") && json.controller.hasOwnProperty("path")) {
			let childNode = new EcoreNode('path', json.controller.path);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			// parseJson(childNode, json.parameter.attribute);
		}

		if (json.hasOwnProperty("controller") && json.controller.hasOwnProperty("routes")) {
			json.controller.routes.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("route") && json.route.hasOwnProperty("path")) {
			let childNode = new EcoreNode('path', json.route.path);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			// parseJson(childNode, json.parameter.attribute);
		}

		if (json.hasOwnProperty("route") && json.route.hasOwnProperty("operation")) {
			let childNode = new EcoreNode('operation', json.route.operation);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			// parseJson(childNode, json.parameter.attribute);
		}

		if (json.hasOwnProperty("route") && json.route.hasOwnProperty("requestParameters") && json.route.requestParameters !== undefined) {
			json.route.requestParameters.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		if (json.hasOwnProperty("requestParameter") && json.requestParameter.hasOwnProperty("attribute")) {
			let childNode = new EcoreNode('attribute', json.requestParameter.attribute);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			// parseJson(childNode, json.parameter.attribute);
		}

		if (json.hasOwnProperty("route") && json.route.hasOwnProperty("requestBody") && json.route.requestBody !== null) {
			let childNode = new EcoreNode('requestBody', json.route.requestBody.name); //?
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.route.requestBody);
		}

		if (json.hasOwnProperty("parameters")) {
			json.parameters.forEach((child: any) => {
				let child_key = getChildKey(child);
				let child_name = child[child_key].name;
				let childNode = new EcoreNode(child_key, child_name);
				childNode.setId(child[child_key].id);
				childNode.setParent(node);
				node.getChildren().push(childNode);
				parseJson(childNode, child);
			});
		}

		//



		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("configuration")) {
			lastId = json.project.configuration.server.id;
			let childNode = new EcoreNode('configuration', json.project.configuration.name); // name??
			childNode.setId(json.project.configuration.id);
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.project.configuration);
		}

		if (json.hasOwnProperty("metadata")) {
			let childNode = new EcoreNode('metadata', json.metadata.name); // name??
			childNode.setId(json.metadata.id);
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.metadata);
		}

		if (json.hasOwnProperty("buildTool")) {
			let childNode = new EcoreNode('buildTool', json.buildTool);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.buildTool);
		}

		if (json.hasOwnProperty("springVersion")) {
			let childNode = new EcoreNode('springVersion', json.springVersion);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.springVersion);
		}

		if (json.hasOwnProperty("package")) {
			let childNode = new EcoreNode('package', json.package);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.package);
		}

		if (json.hasOwnProperty("packaging")) {
			let childNode = new EcoreNode('packaging', json.packaging);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.packaging);
		}

		if (json.hasOwnProperty("javaVersion")) {
			let childNode = new EcoreNode('javaVersion', (json.javaVersion).toString());
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.javaVersion);
		}

		if (json.hasOwnProperty("datasource")) {
			let childNode = new EcoreNode('datasource', json.datasource.name); // name??
			childNode.setId(json.datasource.id);
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.datasource);
		}

		if (json.hasOwnProperty("type")) {
			let childNode = new EcoreNode('type', json.type);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.type);
		}

		if (json.hasOwnProperty("host")) {
			let childNode = new EcoreNode('host', json.host);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.host);
		}

		if (json.hasOwnProperty("port")) {
			let childNode = new EcoreNode('port', (json.port).toString());
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.port);
		}

		if (json.hasOwnProperty("database")) {
			let childNode = new EcoreNode('database', json.database);
			childNode.setId((lastId++).toString());
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.database);
		}

		if (json.hasOwnProperty("server")) {
			let childNode = new EcoreNode('server', json.server.name); // name??
			childNode.setId(json.server.id);
			childNode.setParent(node);
			node.getChildren().push(childNode);
			parseJson(childNode, json.server);
		}


	}

	// Call the recursive function to traverse the JSON object
	parseJson(root, json);
	let model = new EcoreModel([root]);
	return model;
}

function pathExists(p: string): boolean {
	try {
		fs.accessSync(p);
	} catch (err) {
		return false;
	}

	return true;
}

function getChildKey(child: any) {
	return Object.keys(child)[0] as 'project' | 'enum' | 'literal' | 'entity' | 'attribute' |
		'relationship' | 'repository' | 'query' | 'type' | 'parameter' |
		'service' | 'method' | 'controller' | 'path' | 'route' | 'operation' | 'requestBody' | 'requestParameter' |
		'configuration' | 'metadata' | 'buildTool' | 'springVersion' | 'group' | 'artifact' | 'name' | 'description' |
		'package' | 'packaging' | 'javaVersion' | 'datasource' | 'host' | 'port' | 'database' | 'server';
}

function saveAddChangesToJSON(changedNode: EcoreNode) {
	if (pathExists(file!) && file) {
		const vcoreString = fs.readFileSync(file, "utf8");
		let json = parseJgenJson(vcoreString);

		//different json structure depending on the type of node

		let key = changedNode.type;
		let newChild;
		switch (changedNode.type) {
			case "project":
				break;
			// case "VPackage":
			// 	const newPackage = `{
			// 		"${key}": {
			// 			"id": "${changedNode.getId()}",
			// 			"name": "${changedNode.getName()}",
			// 			"VPrefix": "${changedNode.getName()}",
			// 			"VUri": "myUri",
			// 			"VComponents": []
			// 		}
			// 	}`;

			// 	newChild = parse(newPackage);
			// 	addChildNode(json, newChild, changedNode);
			// 	break;
			case "entity":
				const newClassJSON = `{
					"${key}": {
						"id": "${changedNode.getId()}",
						"name": "${changedNode.getName()}",
						"attributes": []
					}
				}`;

				newChild = parseJgenJson(newClassJSON);
				addChildNode(json, newChild, changedNode);
				break;
			// case "relationship":
			// 	const newRelationshipJSON = `{
			// 		"${key}": {
			// 			"id": "${changedNode.getId()}"
			// 		}
			// 	}`;

			// 	newChild = convertVCoreFormatToJSON(newRelationshipJSON);
			// 	addChildNode(json, newChild, changedNode);
			// 	break;
			// case "VEnumeration":
			// 	const newEnumerationJSON = `{
			// 		"${key}": {
			// 			"id": "${changedNode.getId()}",
			// 			"name": "${changedNode.getName()}",
			// 			"VStructuralFeatures": []
			// 		}
			// 	}`;

			// 	newChild = parse(newEnumerationJSON);
			// 	addChildNode(json, newChild, changedNode);
			// 	break;
			case "attribute":
				const newAttributeJSON = `{
					"${key}": {
						"id": "${changedNode.getId()}",
						"name": "${changedNode.getName()}",
						"type": "Integer"
					}
				}`;

				newChild = parseJgenJson(newAttributeJSON);
				addChildNode(json, newChild, changedNode);
				break;
			default:
				break;
		}


		//write in File
		fs.writeFile(file, JSON.stringify(json, null, 4), 'utf8', (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('JSON data has been written to file successfully.');
		});
	}
}

function saveRenameDeleteChangesToJSON(operation: string, changedNode: EcoreNode, parentNode?: EcoreNode) {
	if (pathExists(file!) && file) {
		console.log("file path is", file);
		const vcoreString = fs.readFileSync(file, "utf8");
		console.log("file content is", vcoreString);
		console.log("changed node", changedNode);
		let json = parseJgenJson(vcoreString);
		//let json = parse(vcoreString);

		//different json structure depending on the type of node
		switch (operation) {
			case "rename":
				json = renameNode(json, changedNode);
				break;
			// case "delete":
			// 	json = deleteNode(json, changedNode);
			// 	break;
			default:
				break;
		}

		//write in File
		let content = parseJSONToJgenFormat(json!);
		fs.writeFile(file, content, 'utf8', (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('JSON data has been written to file successfully.');
		});
	}
}

function renameNode(json: any, node: EcoreNode): any {
	let jsonID = getJsonID(json);
	console.log("json id is", getJsonID(json));
	console.log("node id is", node.getId());
	if (jsonID === node.getId()) {
		console.log("found");
		setJsonName(json, node.getName());
	}
	else {
		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("entities")) {
			for (let childJSON of json.project.entities) {
				childJSON = renameNode(childJSON, node);
			}
		}
		else if (json.hasOwnProperty("entity") && json.entity.hasOwnProperty("attributes")) {
			for (let childJSON of json.entity.attributes) {
				childJSON = renameNode(childJSON, node);
			}
		}
		else {
			console.log("not found");
		}
	}
	return json;
}

//

function getJsonID(json: any) {
	let jsonID = "";
	if (json.hasOwnProperty("project")) { jsonID = json.project.id; }
	else if (json.hasOwnProperty("entity")) { jsonID = json.entity.id; }
	else if (json.hasOwnProperty("attribute")) { jsonID = json.attribute.id; }
	else if (json.hasOwnProperty("relationship")) { jsonID = json.relationship.id; }

	else if (json.hasOwnProperty("repository")) { jsonID = json.repository.id; }
	else if (json.hasOwnProperty("query")) { jsonID = json.query.id; }
	else if (json.hasOwnProperty("parameter")) { jsonID = json.parameter.id; }

	else if (json.hasOwnProperty("service")) { jsonID = json.service.id; }
	else if (json.hasOwnProperty("method")) { jsonID = json.method.id; }

	return jsonID;
}

function setJsonName(json: any, newName: string) {
	if (json.hasOwnProperty("project")) { json.project.name = newName; }
	else if (json.hasOwnProperty("entity")) { json.entity.name = newName; }
	else if (json.hasOwnProperty("attribute")) { json.attribute.name = newName; }
	// else if (json.hasOwnProperty("relationship"))
	// 	{json.relationship.name = newName;}

	else if (json.hasOwnProperty("repository")) { json.repository.name = newName; }
	else if (json.hasOwnProperty("query")) { json.query.name = newName; }
	else if (json.hasOwnProperty("parameter")) { json.parameter.name = newName; }

	else if (json.hasOwnProperty("service")) { json.service.name = newName; }
	else if (json.hasOwnProperty("method")) { json.method.name = newName; }
}

function addChildNode(json: any, child: any, node: EcoreNode): any {
	if (!node.getParent()) {
		console.log("ERROR ADD: no parent");
		return;
	}

	let jsonID = getJsonID(json);
	if (jsonID === node.getParent()?.getId()) {
		//console.log("found")
		//push child to parent
		pushChild(json, child, node);

	}
	else {
		if (json.hasOwnProperty("project")) {
			if (json.project.hasOwnProperty("entities")) {
				for (let childJSON of json.project.entities) {
					childJSON = addChildNode(childJSON, child, node);
				}
			}
			else {
				json.project.entities = [];
			}
		}
		else if (json.hasOwnProperty("entity")) {
			if (json.entity.hasOwnProperty("attributes")) {
				for (let childJSON of json.entity.attributes) {
					childJSON = addChildNode(childJSON, child, node);
				}
			}
			else {
				json.entity.attributes = [];
			}
		}
		else {
			console.log("not found");
		}
	}
	return json;
}

function pushChild(json: any, child: any, node: EcoreNode) {
	if (json.hasOwnProperty("project")) { json.project.entities.push(child); }
	else if (json.hasOwnProperty("entity")) { json.entity.attributes.push(child); }
}