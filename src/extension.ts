import * as vscode from 'vscode';
import * as fs from "fs";
import { EcoreTreeDataProvider, EcoreModel, EcoreNode } from "./treeview";
import * as path from "path";
import { MyMenuButtonsProvider } from './models/selectFileButton';
import {
	LanguageClient, LanguageClientOptions, ServerOptions, TransportKind, integer
} from 'vscode-languageclient/node';
//import { parse } from 'jsonc-parser';
import { Attribute, Entity, Project } from './language-server/generated/ast';

let client: LanguageClient;
export let file = "";
let model: EcoreModel;
let ecoreTreeDataProvider: EcoreTreeDataProvider;
let treeView: vscode.TreeView<EcoreNode>;

interface AttributeNode {
	id: number;
    name: string;
    type: string;
}

interface EntityNode {
	id: number;
    name: string;
    attributes: { attribute: AttributeNode }[];
}

interface ProjectNode {
	id: number;
    name: string;
    entities: { entity: EntityNode }[];
}

interface ResultNode {
    project: ProjectNode;
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
}

// create new file button

//import file button

async function vscodeMDE(context: vscode.ExtensionContext, selectFile: string) {
	context.subscriptions.push(treeView.onDidChangeSelection(async (event) => {
		if (event.selection.length > 0) {
			const selectedNode: EcoreNode = event.selection[0];
			console.log("selected node",selectedNode);
			const actions = [];

			if (event.selection) {
				switch (selectedNode.type) {
					//case 'project':
					// case 'VPackage':
					// 	actions.push({ label: 'Rename', command: 'JGEN.rename' });
					// 	actions.push({ label: 'Delete', command: 'JGEN.delete' });
					// 	actions.push({ label: 'Add Package', command: 'JGEN.addPackage' });
					// 	actions.push({ label: 'Add Class ', command: 'JGEN.addClass' });
					// 	actions.push({ label: 'Add Enumeration', command: 'JGEN.addEnumeration' });
					// 	actions.push({ label: 'Add Data Type', command: 'JGEN.addDataType' });
					// 	break;
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

export function convertVCoreFormatToJSON(vcoreString: string): ResultNode | null {
	let i = 0;
    try {
        const projectRegex = /project (\w+) {([\s\S]*?)}/;
        const entityRegex = /entity (\w+) {([\s\S]*?)}/g;
        const attributeRegex = /attribute (\w+) type (\w+)/g;

        const projectMatch = vcoreString.match(projectRegex);

        if (!projectMatch) {
            throw new Error('Invalid vcoreString format');
        }

        const projectName = projectMatch[1];
        const entities: { entity: EntityNode }[] = [];

        let entityMatch;
        while ((entityMatch = entityRegex.exec(vcoreString)) !== null) {
            const entityName = entityMatch[1];
            const attributes: { attribute: AttributeNode }[] = [];

            let attributeMatch;
            while ((attributeMatch = attributeRegex.exec(entityMatch[2])) !== null) {
                const attributeName = attributeMatch[1];
                const attributeType = attributeMatch[2];

                attributes.push({
                    attribute: {
						id:i++,
                        name: attributeName,
                        type: attributeType,
                    },
                });
            }

            entities.push({
                entity: {
					id:i++,
                    name: entityName,
                    attributes,
                },
            });
        }

        const result: ResultNode = {
            project: {
				id:i++,
                name: projectName,
                entities,
            },
        };

        return result;
    } catch (error) {
        console.error(`Error converting to JSON`);
        return null;
    }
}

function convertJSONToVCoreFormat(data: ResultNode): string {
    const { project } = data;
    const { name, entities } = project;

    const entityStrings = entities.map(({ entity }) => {
        const { name: entityName, attributes } = entity;
        const attributeStrings = attributes.map(({ attribute }) => {
            const { name: attributeName, type } = attribute;
            return `\t\tattribute ${attributeName} type ${type}`;
        }).join('\n');

        return `entity ${entityName} {\n${attributeStrings}\n\t}`;
    }).join('\n\n');

    return `project ${name} {\n${entityStrings}\n}`;
}

function convertJsonToEcoreModel(selectFile: string): EcoreModel {
	if (pathExists(selectFile!) && selectFile) {
		let vcoreString = fs.readFileSync(selectFile, "utf8");
		//const vcoreString = fs.readFileSync(selectedFile[0].fsPath, "utf8");

	    const jsonRepresentation = convertVCoreFormatToJSON(vcoreString);

		try {

			//const json = parse(vcoreString);
			//let json = JSON.stringify(jsonRepresentation, null, 4);
			let json = jsonRepresentation;
			console.log("json is :",json);

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

        // Handle other cases as needed...

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
      'service' | 'method' | 'controller' | 'path' | 'route' | 'operation' | 'requestBody' | 'requestParameter';
}

function saveAddChangesToJSON(changedNode: EcoreNode) {
	if (pathExists(file!) && file) {
		const vcoreString = fs.readFileSync(file, "utf8");
		let json = convertVCoreFormatToJSON(vcoreString);

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

				newChild = convertVCoreFormatToJSON(newClassJSON);
				addChildNode(json, newChild, changedNode);
				break;
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
						"type": "int"
					}
				}`;

				newChild = convertVCoreFormatToJSON(newAttributeJSON);
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
		console.log("file path is",file);
		const vcoreString = fs.readFileSync(file, "utf8");
		console.log("file content is",vcoreString);
		console.log("changed node",changedNode);
		let json = convertVCoreFormatToJSON(vcoreString);
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
		let content = convertJSONToVCoreFormat(json!);
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
	console.log("json id is",getJsonID(json));
	console.log("node id is",node.getId());
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
	if (json.hasOwnProperty("project"))
		{jsonID = json.project.id;}
	else if (json.hasOwnProperty("entity"))
		{jsonID = json.entity.id;}
	else if (json.hasOwnProperty("attribute"))
		{jsonID = json.attribute.id;}
	return jsonID;
}

function setJsonName(json: any, newName: string) {
	if (json.hasOwnProperty("project"))
		{json.project.name = newName;}
	else if (json.hasOwnProperty("entity"))
		{json.entity.name = newName;}
	else if (json.hasOwnProperty("attribute"))
		{json.attribute.name = newName;}
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
	if (json.hasOwnProperty("project"))
		{json.project.entities.push(child);}
	else if (json.hasOwnProperty("entity"))
		{json.entity.attributes.push(child);}
}