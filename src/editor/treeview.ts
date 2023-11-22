import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { JgenNode } from "../model/models";
import { convertVCoreFormatToJSON } from "../extension";

export class VcoreTreeDataProvider
  implements vscode.TreeDataProvider<JgenNode>
{
  private _onDidChangeTreeData: vscode.EventEmitter<JgenNode | undefined> =
    new vscode.EventEmitter<JgenNode | undefined>();
  readonly onDidChangeTreeData: vscode.Event<JgenNode | undefined> =
    this._onDidChangeTreeData.event;
  constructor(private workspaceRoot: string | undefined) {
  }
  getTreeItem(element: JgenNode): vscode.TreeItem {
    switch (element.type) {

      case "enum":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "enum",
        };
      case "literal":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "literal",
        };
      case "entity":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "entity",
        };
      case "attribute":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "attribute",
        };
      case "relationship":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "relationship",

        };
      
      case "from":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "from",
        };
      case "to":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "to",
        };
      case "repository":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "repository",

        };
      case "reference":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "reference",

        };
      case "query":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "query",
        };
      case "type": // ?
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "type",
        };
      case "parameter":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "parameter",
        };
      case "service":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "service",
        };
      case "method":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "method",
        };
      case "controller":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "controller",
        };
      case "route":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "route",
        };
      case "operation":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "operation",
        };
      case "requestParameter":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "requestParameter",
        };
      case "requestBody":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "requestBody",
        };
      
      //

      case "configuration":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "configuration",
        };
      case "metadata":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "metadata",
        };
      case "buildTool":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "buildTool",
        };
      case "springVersion":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "springVersion",
        };
      case "group":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "group",
        };
      case "artifact":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "artifact",
        };
      case "name": // is the project name, already exist; the fisrt node!
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "name",
        };
      case "description":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "description",
        };
      case "package":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "package",
        };
      case "packaging":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "packaging",
        };
      case "javaVersion":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "javaVersion",
        };
      case "datasource":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "datasource",
        };
      // case "type":
      //   return {
      //     label: element.name,
      //     collapsibleState: vscode.TreeItemCollapsibleState.None,
      //     contextValue: "type",
      //   };
      case "host":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "host",
        };
      case "port":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "port",
        };
      case "database":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "database",
        };
      case "server":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "server",
        };
      // host
      // port

      default:
        return {
          label: "Unknown Element",
          collapsibleState: vscode.TreeItemCollapsibleState.None,
        };
    }
  }

  getChildren(element?: JgenNode): vscode.ProviderResult<JgenNode[]> {
    const workspaceRoot =
      vscode.workspace.workspaceFolders &&
        vscode.workspace.workspaceFolders.length > 0
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : undefined;
    if (!workspaceRoot) {
      vscode.window.showInformationMessage("No dependency in empty workspace");
      return Promise.resolve([]);
    }

    if (element) {
      return Promise.resolve(
        this.getJcoreModel(
          path.join(workspaceRoot, "test.model")
        )
      );
    } else {
      const packageJsonPath = path.join(workspaceRoot, "test.model");
      if (this.pathExists(packageJsonPath)) {
        return Promise.resolve(this.getJcoreModel(packageJsonPath));
      } else {
        vscode.window.showInformationMessage("Workspace has no test.model");
        return Promise.resolve([]);
      }
    }
  }

  private getJcoreModel(JcorePath: string): any {
    const workspaceRoot =
      vscode.workspace.workspaceFolders &&
        vscode.workspace.workspaceFolders.length > 0
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : undefined;
    if (this.pathExists(JcorePath) && workspaceRoot) {
      const jcoreString = fs.readFileSync(JcorePath, "utf8");

      const vcoreJson = convertVCoreFormatToJSON(jcoreString);

      // const vcoreModel = this.convertJsonToModel(vcoreJson);
      console.log(jcoreString);
      return vcoreJson;
    } else {
      return [];
    }
  }
  // private convertJsonToModel(json: any): VcoreNode[] {
  //   let vcoreModel: VcoreNode[] = [];

  //   if (json.type == "Root") {
  //     const node = this.convertJsonObjectToModel(json);
  //     return vcoreModel;

  //   } else {
  //     //print error
  //     vscode.window.showInformationMessage("No Root Element");
  //     return [];
  //   }

  // }

  // private convertJsonArrayToModel(jsonArray: any[]): VcoreNode[] {
  //   const vcoreModel: VcoreNode[] = [];

  //   for (const element of jsonArray) {
  //     if (element instanceof Array) {
  //       const children = this.convertJsonArrayToModel(element);

  //       const node = new VcoreNode("package", element, children);

  //       vcoreModel.push(node);
  //     } else if (typeof element === "object") {
  //       const node = this.convertJsonObjectToModel(element);

  //       vcoreModel.push(node);
  //     } else {
  //       const node = new VcoreNode(element, element);

  //       vcoreModel.push(node);
  //     }
  //   }

  //   return vcoreModel;
  // }
  // private convertJsonObjectToModel(json: any): VcoreNode {
  //   const vcoreModel: VcoreNode[] = [];

  //   for (const prop in json) {
  //     const value = json[prop];

  //     if (value instanceof Array) {
  //       const children = this.convertJsonArrayToModel(value);

  //       const node = new VcoreNode(prop, children);

  //       vcoreModel.push(node);
  //     } else if (typeof value === "object") {
  //       const node = this.convertJsonObjectToModel(value);

  //       vcoreModel.push(node);
  //     } else {
  //       const node = new VcoreNode(prop, value);

  //       vcoreModel.push(node);
  //     }
  //   }

  //   const root = new VcoreNode(json, vcoreModel);

  //   return root;
  // }

  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }

    return true;
  }
}

