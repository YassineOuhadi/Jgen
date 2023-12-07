import * as vscode from 'vscode';
import * as fs from "fs";
import { EcoreTreeDataProvider, EcoreModel, EcoreNode } from "./treeview";
import * as path from "path";
import { MyMenuButtonsProvider } from './models/selectFileButton';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';
import { JgenNode, parseJSONToJgenFormat, parseJgenJson } from './parser';
import { parse } from 'jsonc-parser';

let client: LanguageClient;
export let file = "";
let model: EcoreModel;
let ecoreTreeDataProvider: EcoreTreeDataProvider;
let treeView: vscode.TreeView<EcoreNode>;

let extensionContext: vscode.ExtensionContext;

export async function activate(context: vscode.ExtensionContext) {
	// Create the tree view
	client = startLanguageClient(context);

	let menuButtons = new MyMenuButtonsProvider();
	menuButtons.getChildren()?.forEach((button) => {
		button.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'img', 'blue-button.png'));
		button.description = "#0000FF";
	});

	let mytreeView = vscode.window.createTreeView("jgenView", { treeDataProvider: menuButtons });
	context.subscriptions.push(mytreeView);

	// select file button
	context.subscriptions.push(
		vscode.commands.registerCommand("mySelectFileButtonCommand", () => {
			vscode.window
				.showOpenDialog({
					canSelectMany: false,
					openLabel: "Select",
					filters: {
						// eslint-disable-next-line @typescript-eslint/naming-convention
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
						const filename = "\\test.jgen";

						/*const selectedFile = await vscode.window.showOpenDialog({
							canSelectMany: false,
							filters: {
							'Model files': ['model']
							}
						}); */

						// eslint-disable-next-line eqeqeq
						if (filePath == undefined) {
							filePath = workspaceRoot + filename;
						}

						file = filePath;

						context.subscriptions.splice(context.subscriptions.indexOf(mytreeView), 1);
						extensionContext = context;
						model = convertJsonToEcoreModel(file);

						ecoreTreeDataProvider = new EcoreTreeDataProvider(model);

						vscode.commands.registerCommand('JGEN.refreshEntry', () => {
							// Refresh the tree view
							refreshTreeView();
						});

						vscode.window.registerTreeDataProvider('jgenView', ecoreTreeDataProvider);

						treeView = vscode.window.createTreeView('jgenView', { treeDataProvider: ecoreTreeDataProvider });
						context.subscriptions.push(treeView);

						vscodeMDE(context);
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

	// create new file button

	//import file button
}

function refreshTreeView() {
	model = convertJsonToEcoreModel(file);
	ecoreTreeDataProvider = new EcoreTreeDataProvider(model);
	vscode.window.registerTreeDataProvider('jgenView', ecoreTreeDataProvider);
	treeView = vscode.window.createTreeView('jgenView', { treeDataProvider: ecoreTreeDataProvider });
	extensionContext.subscriptions.push(treeView);
	vscodeMDE(extensionContext);
	ecoreTreeDataProvider.refresh();
};

async function vscodeMDE(context: vscode.ExtensionContext) {
	context.subscriptions.push(treeView.onDidChangeSelection(async (event) => {
		if (event.selection.length > 0) {
			const selectedNode: EcoreNode = event.selection[0];
			console.log("selected node", selectedNode);
			const actions = [];

			if (event.selection) {
				switch (selectedNode.type) {

					case 'project':
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						// actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Enum', command: 'JGEN.addEnum' });
						actions.push({ label: 'Add Entity ', command: 'JGEN.addEntity' });
						actions.push({ label: 'Add Relationship', command: 'JGEN.addRelationship' });
						actions.push({ label: 'Add Repository', command: 'JGEN.addRepository' });
						actions.push({ label: 'Add Service', command: 'JGEN.addService' });
						actions.push({ label: 'Add Controller', command: 'JGEN.addController' });
						break;

					case 'enum':
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Literal', command: 'JGEN.addLiteral' });
						break;
					case 'literal':
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Change Value', command: 'JGEN.changeValue' });
						break;

					case 'entity':
						// actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Add Attribute', command: 'JGEN.addAttribute' });
						// add relationship
						break;
					case 'attribute':
						// actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Change Data Type', command: 'JGEN.changeDataType' });
						// primary key
						// nullable
						break;

					case 'relationship':
						// actions.push({ label: 'Show Properties', command: 'JGEN.openContextMenu' });
						// actions.push({ label: 'Rename', command: 'JGEN.rename' });
						actions.push({ label: 'Delete', command: 'JGEN.delete' });
						actions.push({ label: 'Change Source', command: 'JGEN.changeSource' });
						actions.push({ label: 'Change Destination', command: 'JGEN.changeDestination' });
						actions.push({ label: 'Change Relationship Type', command: 'JGEN.changeRelationshipType' });
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

	// Listen for when the file is saved
	vscode.workspace.onDidSaveTextDocument(event => {
		// Check if the saved file is the one that the tree view is reading from
		if (event.fileName === file) {
			// Refresh the tree view
			// model = convertJsonToEcoreModel(file);
			// ecoreTreeDataProvider = new EcoreTreeDataProvider(model);
			// vscode.window.registerTreeDataProvider('jgenView', ecoreTreeDataProvider);
			// treeView = vscode.window.createTreeView('jgenView', { treeDataProvider: ecoreTreeDataProvider });
			// context.subscriptions.push(treeView);
			// vscodeMDE(context, selectFile);
			// ecoreTreeDataProvider.refresh();
			vscode.window.showErrorMessage(`File has changed manually. Please reupload it again to take the changes into consideration.`);
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

	//delete node
	commandName = 'JGEN.delete';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, (node: EcoreNode) => {
			vscode.window.showInformationMessage(`Delete ${node.getName()}`);
			const hasparent = node.getParent();
			if (hasparent) {
				const index = hasparent.getChildren().indexOf(node);
				hasparent.getChildren().splice(index, 1);
			}
			else {
				//delete node
				const index = model.rootNodes.indexOf(node);
				//console.log(index)
				if (0 <= index && index < model.rootNodes.length) {model.rootNodes.splice(index, 1);}
			}
			ecoreTreeDataProvider.getonDidChangeTreeData().fire;

			//save changes to json
			saveRenameDeleteChangesToJSON("delete", node, hasparent);

			//show select file button if model is empty
			if (model.rootNodes.length == 0) {
				vscode.window.showErrorMessage("No model found");

				// unregister tree data provider
				vscode.window.registerTreeDataProvider('exampleView', new MyMenuButtonsProvider());
				// re-register command for "Select File" button 

				const mySelectFileButtonCommand = 'mySelectFileButtonCommand';


				if (existingCommands.includes(mySelectFileButtonCommand)) {
					context.subscriptions.splice(context.subscriptions.indexOf(treeView), 1);
					vscode.commands.executeCommand(mySelectFileButtonCommand);
				}

				else {
					context.subscriptions.push(vscode.commands.registerCommand(mySelectFileButtonCommand, () => {
						vscode.window
							.showOpenDialog({
								canSelectMany: false,
								openLabel: "Select",
								filters: {
									"All files": ["*"]
									//"Model files": ["*.model"]
								},
							})
							.then((fileUri) => {
								if (fileUri) {
									// you can use the path of the selected file to read its content
									const filePath = fileUri[0].fsPath;

									file = filePath;

									context.subscriptions.splice(context.subscriptions.indexOf(treeView), 1);
									model = convertJsonToEcoreModel(filePath);

									ecoreTreeDataProvider = new EcoreTreeDataProvider(model);
									vscode.window.registerTreeDataProvider('exampleView', ecoreTreeDataProvider);

									treeView = vscode.window.createTreeView('exampleView', { treeDataProvider: ecoreTreeDataProvider });
									context.subscriptions.push(treeView);

									vscodeMDE(context);

								}
							});
					}));
				}
			}
		}));
	}

	// Add enum
	commandName = 'JGEN.addEnum';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, async (node: EcoreNode) => {
			vscode.window.showInformationMessage(`Add Enum`);
			const newname = await vscode.window.showInputBox({ prompt: `New Enum Name: ` });
			let newEnum= new EcoreNode('enum', newname ? newname : 'New Enum');
			newEnum.setParent(node);
			node.getChildren().push(newEnum);
			ecoreTreeDataProvider.getonDidChangeTreeData().fire;

			//save changes to json
			saveAddChangesToJSON(newEnum);
		}));
	}

	// Add literal
	commandName = 'JGEN.addLiteral';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, async (node: EcoreNode) => {
			vscode.window.showInformationMessage(`Add Literal`);
			const newname = await vscode.window.showInputBox({ prompt: `New Literal Name: ` });
			let newLiteral = new EcoreNode('literal', newname ? newname : 'New Literal');
			newLiteral.setParent(node);
			node.getChildren().push(newLiteral);
			ecoreTreeDataProvider.getonDidChangeTreeData().fire;

			//save changes to json
			saveAddChangesToJSON(newLiteral);
		}));
	}

	// Add entity
	commandName = 'JGEN.addEntity';
	if (!existingCommands.includes(commandName)) {
		context.subscriptions.push(vscode.commands.registerCommand(commandName, async (node: EcoreNode) => {
			vscode.window.showInformationMessage(`Add Entity`);
			const newname = await vscode.window.showInputBox({ prompt: `New Entity Name: ` });
			let newEntity= new EcoreNode('entity', newname ? newname : 'New Entity');
			newEntity.setParent(node);
			node.getChildren().push(newEntity);
			ecoreTreeDataProvider.getonDidChangeTreeData().fire;

			//save changes to json
			saveAddChangesToJSON(newEntity);
		}));
	}

	// Add attribute
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

	//
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
					buildTool: 'Maven',
					springVersion: '3.1.6',
					group: 'com.example',
					artifact: project,
					name: project,
					description: 'Demo project for Spring Boot',
					package: `com.example.${project}`,
					packaging: 'Jar',
					javaVersion: 17,
				},
				datasource: {
					id: i++,
					type: '-',
					host: 'localhost',
					port: 3306,
					database: '-',
				},
				server: {
					id: i++,
					host: 'localhost',
					port: 8080,
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

async function saveAddChangesToJSON(changedNode: EcoreNode) {
	if (pathExists(file!) && file) {
		const vcoreString = fs.readFileSync(file, "utf8");
		let json = parseJgenJson(vcoreString);

		//different json structure depending on the type of node

		let key = changedNode.type;
		let newChild;
		switch (changedNode.type) {
			case "project":
				break;
			case "enum":
				const newENUMJSON = `{
					"${key}": {
						"id": "${changedNode.getId()}",
						"name": "${changedNode.getName()}",
						"literals": []
					}
				}`;
				// newChild = parseJgenJson(newAttributeJSON);
				newChild = parse(newENUMJSON);
				addChildNode(json, newChild, changedNode);
				break;
			case "literal":
				const newLiteralValue = await vscode.window.showInputBox({ prompt: `New Literal Value: ` });
				const newLiteralJSON = `{
					"${key}": {
						"id": "${changedNode.getId()}",
						"name": "${changedNode.getName()}",
						"value": "${newLiteralValue}"
					}
				}`;
				// newChild = parseJgenJson(newAttributeJSON);
				newChild = parse(newLiteralJSON);
				addChildNode(json, newChild, changedNode);
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

				// newChild = parseJgenJson(newAttributeJSON);
				newChild = parse(newClassJSON);
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
				const newAttributeType = await vscode.window.showInputBox({ prompt: `New Attribute Type: ` });
				const newAttributeJSON = `{
					"${key}": {
						"id": "${changedNode.getId()}",
						"name": "${changedNode.getName()}",
						"type": "${newAttributeType}"
					}
				}`;

				// newChild = parseJgenJson(newAttributeJSON);
				newChild = parse(newAttributeJSON);
				// console.log("new att this is :", parseJSONToJgenFormat(newChild));
				addChildNode(json, newChild, changedNode);
				break;
			default:
				break;
		}

		//write in File
		let content = parseJSONToJgenFormat(json!);
		fs.writeFile(file, content, 'utf8', (err) => {
			if (err) {
				console.error(err);
				return;
			};
			refreshTreeView();
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
			case "delete":
				json = deleteNode(json, changedNode);
				break;
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
			// Refresh the tree view
			refreshTreeView();
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
		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("enums")) {
			for (let childJSON of json.project.enums) {
				childJSON = renameNode(childJSON, node);
			}
		}
		else if (json.hasOwnProperty("enum") && json.enum.hasOwnProperty("literals")) {
			for (let childJSON of json.enum.literals) {
				childJSON = renameNode(childJSON, node);
			}
		}
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

function deleteNode(json: any, node: EcoreNode) {
	let jsonID = getJsonID(json);
	let found = false;
	if (jsonID === node.getId()) {
		console.log("found");
		//if(node.type == "VModel"){
		//	delete json["VPackage"];
		//}		 
		//else
		delete json[node.type];
	}
	else {
		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("enums")) {
			for (let childJSON of json.project.enums) {
				childJSON = deleteNode(childJSON, node);
				if (found)
					{break;}
			}
		}
		else if (json.hasOwnProperty("enum") && json.enum.hasOwnProperty("literals")) {
			for (let childJSON of json.enum.literals) {
				childJSON = deleteNode(childJSON, node);
				// if (found)
				// 	{break;}
			}
		}
		if (json.hasOwnProperty("project") && json.project.hasOwnProperty("entities")) {
			for (let childJSON of json.project.entities) {
				childJSON = deleteNode(childJSON, node);
				if (found)
					{break;}
			}
		}
		else if (json.hasOwnProperty("entity") && json.entity.hasOwnProperty("attributes")) {
			for (let childJSON of json.entity.attributes) {
				childJSON = deleteNode(childJSON, node);
				if (found)
					{break;}
			}
		}
		else {
			console.log("ERROR DELETE: not found");
		}
	}
	//remove empty {} from json
	cleanJSON(json);

	//console.log("deleteNode in  json " + node.getID() );
	//console.log(json);
	return json;
}

function cleanJSON(json: any) {
	if (json.hasOwnProperty("project"))
	{
			json.project.enums = json.project.enums.filter((elem: {}) => Object.keys(elem).length !== 0);
			json.project.entities = json.project.entities.filter((elem: {}) => Object.keys(elem).length !== 0);
	}
	else if (json.hasOwnProperty("enum"))
		{json.enum.literals = json.enum.literals.filter((elem: {}) => Object.keys(elem).length !== 0);}
	else if (json.hasOwnProperty("entity"))
		{json.entity.attributes = json.entity.attributes.filter((elem: {}) => Object.keys(elem).length !== 0);}
}

function getJsonID(json: any) {
	let jsonID = "";
	if (json.hasOwnProperty("project")) { jsonID = json.project.id; }

	else if (json.hasOwnProperty("enum")) { jsonID = json.enum.id; }
	else if (json.hasOwnProperty("literal")) { jsonID = json.literal.id; }

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

	else if (json.hasOwnProperty("enum")) { json.enum.name = newName; }
	else if (json.hasOwnProperty("literal")) { json.literal.name = newName; }

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
			};

			if (json.project.hasOwnProperty("enums")) {
				for (let childJSON of json.project.enums) {
					childJSON = addChildNode(childJSON, child, node);
				}
			}
			else {
				json.project.enums = [];
			};

		}
		else if (json.hasOwnProperty("enum")) {
			if (json.enum.hasOwnProperty("literals")) {
				for (let childJSON of json.enum.literals) {
					childJSON = addChildNode(childJSON, child, node);
				}
			}
			else {
				json.enum.literals = [];
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
	if (json.hasOwnProperty("project")) {
		if(child.hasOwnProperty("enum")) {
			json.project.enums.push(child); 
		} else if(child.hasOwnProperty("entity")) {
			json.project.entities.push(child); 
		}
	}
	else if (json.hasOwnProperty("entity")) { json.entity.attributes.push(child); }
	else if (json.hasOwnProperty("enum")) { json.enum.literals.push(child); }
}