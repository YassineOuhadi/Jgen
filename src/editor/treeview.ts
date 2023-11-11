import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { JgenNode } from "../model/models";

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

      // case "project":
      //   return {
      //     label: element.name,
      //     collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      //     contextValue: "project",
      //   };
      case "entity":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
          contextValue: "entity",
        };
      // case "EDataType":
      //   return {
      //     label: element.name,
      //     collapsibleState: vscode.TreeItemCollapsibleState.None,
      //     contextValue: "EDataType",
      //   };
      case "attribute":
        return {
          label: element.name,
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          contextValue: "attribute",
        };
      // case "EReference":
      //   return {
      //     label: element.name,
      //     collapsibleState: vscode.TreeItemCollapsibleState.None,
      //     contextValue: "EReference",

      //   };
      // case "EConstraint":
      //   return {
      //     label: element.name,
      //     collapsibleState: vscode.TreeItemCollapsibleState.None,
      //     contextValue: "EConstraint",
      //   };
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
        this.getVcoreModel(
          path.join(workspaceRoot, "test.model")
        )
      );
    } else {
      const packageJsonPath = path.join(workspaceRoot, "test.model");
      if (this.pathExists(packageJsonPath)) {
        return Promise.resolve(this.getVcoreModel(packageJsonPath));
      } else {
        vscode.window.showInformationMessage("Workspace has no test.model");
        return Promise.resolve([]);
      }
    }
  }
  private getVcoreModel(JcorePath: string): JgenNode[] {
    const workspaceRoot =
      vscode.workspace.workspaceFolders &&
        vscode.workspace.workspaceFolders.length > 0
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : undefined;
    if (this.pathExists(JcorePath) && workspaceRoot) {
      const jcoreString = fs.readFileSync(JcorePath, "utf8");

      const vcoreJson: JgenNode[] = JSON.parse(jcoreString);

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

