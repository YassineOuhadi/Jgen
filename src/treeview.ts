import * as vscode from "vscode";
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'jsonc-parser';
// interface Properties {
//   name: String;
//   value: any;
// }

export class EcoreTreeDataProvider implements vscode.TreeDataProvider<EcoreNode> {
  private _onDidChangeTreeData: vscode.EventEmitter<EcoreNode | undefined> = new vscode.EventEmitter<EcoreNode | undefined>();
  readonly onDidChangeTreeData: vscode.Event<EcoreNode | undefined> = this._onDidChangeTreeData.event;

  constructor(private readonly ecoreModel: EcoreModel) {this.ecoreModel=ecoreModel;}

  //constructor() { }

  refresh(): void {
    this._onDidChangeTreeData.fire;
  }

  getonDidChangeTreeData() {
    return this._onDidChangeTreeData;
  }

  /*
  getTreeItem(element: VcoreNode): vscode.TreeItem {
    return element;
  }
  */
  getTreeItem(element: EcoreNode): vscode.TreeItem {
    let elementType, elementName;
    (( element.type === "entity" || element.type === "repository" || element.type === "service" ) && ( element.getParent()?.type !== "project" )) ?  elementType = "reference" : elementType = element.type;
    if (!element.getName() || element.getName()?.trim() === '') {
      elementName = element.type; 
      elementType = '';
    } else {
      elementName = element.getName();
      elementType = element.type;
    };

    // if( (!element.getName() || element.getName()?.trim() === '') && (element.type === "configuration" || element.getParent()?.type === "configuration" || element.getParent()?.getParent()?.type === "configuration")) {
    //   elementName = element.type;
    //   elementType = '';
    // } else {
    //     elementName = element.getName();
    //     elementType = element.type;
    // };

    let treeItem: vscode.TreeItem = {
      label: elementName,
      description: elementType,
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      contextValue: "nodeTreeItem",
      command: {
        command: 'JGEN.rightClickNode',
        title: 'rightClickNode',
        arguments: [element]
      },
      iconPath: vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', ''))
    };
    // Return a TreeItem based on the type of element
    switch (element.type) {
      case 'project':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Expanded :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'spring.svg'));
        break;
      case 'enum':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'enum.svg'));
        break;
      case 'literal':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'literal.svg'));
        break;
      case 'entity':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'entity.svg'));
        break;
      case 'attribute':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'attribute.svg'));
        break;
      case 'relationship':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'relationship.svg'));
        break;
      case 'from':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'entity.svg'));
        break;
      case 'to':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'entity.svg'));
        break;
      case 'repository':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'repository.svg'));
        break;
      case 'reference':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'reference.svg'));
        break;
      case 'query':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'query.svg'));
        break;
      // query type ?
      case 'parameter':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'parameter.svg'));
        break;
      case 'service':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'service.svg'));
        break;
      case 'method':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'function.svg'));
        break;
      case 'controller':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'controller.svg'));
        break;
      case 'route':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'http.svg'));
        break;
      case 'path':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'path.svg'));
        break;
      case 'operation':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'operation.svg'));
        break;
      case 'requestParameter':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'parameter.svg'));
        break;
      case 'requestBody':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'body.svg'));
        break;

      case 'configuration':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'config.svg'));
        break;
      case 'metadata':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'metadata.svg'));
        break;
      case 'buildTool':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'build.svg'));
        break;
      case 'springVersion':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'springv.svg'));
        break;
      // case 'group':
      //   element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
      //     treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
      //   treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'group.svg'));
      //   break;
      // case 'artifact':
      //   element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
      //     treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
      //   treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'artifact.svg'));
      //   break;
      // case 'name':
      //   element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
      //     treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
      //   treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'name.svg'));
      //   break;
      // case 'description':
      //   element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
      //     treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
      //   treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'description.svg'));
      //   break;
      case 'package':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'package.svg'));
        break;
      case 'packaging':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'packaging.svg'));
        break;
      case 'javaVersion':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'javav.svg'));
        break;
      case 'datasource':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'datasource.svg'));
        break;
      case 'type':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'type.svg'));
        break;
      case 'host':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'host.svg'));
        break;
      case 'port':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'port.svg'));
        break;
      case 'database':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'database.svg'));
        break;
      case 'server':
        element.getChildren().length > 0 ? treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed :
          treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
        treeItem.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'dark', 'server.svg'));
        break;
        
      default:
        return {
          label: 'Unknown Element',
          collapsibleState: vscode.TreeItemCollapsibleState.None
        };
    }
    return treeItem;
  }


  getChildren(element?: EcoreNode): vscode.ProviderResult<EcoreNode[]> {
    // If no element is provided, return the root nodes of the model
    if (!element) {
      return this.ecoreModel.rootNodes;
    }

    // Otherwise, return the children of the element
    return element.getChildren();
  }
  /*
  
  getChildren(element?: EcoreNode): vscode.ProviderResult<EcoreNode[]> {
      // If no element is provided, return the root nodes of the model
      const JModel = convertJsonToEcoreModel();
      if (!element) {
        return JModel.rootNodes;
      }
  
      // Otherwise, return the children of the element
      return element.children;
    }
    
    */

}

export class EcoreNode {
  private id: string = (genUniqueId() as string);
  private parent: EcoreNode | undefined;
  private parameters: EcoreNode[] | undefined;

  constructor(
    public readonly type: 'project' | 'enum' | 'literal' | 'entity' | 'attribute' |
      'relationship' | 'from' | 'to' | 'repository' | 'reference' | 'query' | 'type' | 'parameter' |
      'service' | 'method' | 'controller' | 'path' | 'route' | 'operation' | 'requestBody' | 'requestParameter' |
      'configuration' | 'metadata' | 'buildTool' | 'springVersion' | 'group' | 'artifact' | 'name' | 'description' | 
      'package' | 'packaging' | 'javaVersion' | 'datasource' | 'host' | 'port' | 'database' | 'server',
    private name: string,
    private children: EcoreNode[] = [],
    id?: string
  ) {
    children.forEach((child) => child.setParent(this));
    if (id) {this.id = id;}
  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getParameters() {
    return this.parameters;
  }

  setParameters(parameters: EcoreNode[]) {
    this.parameters = parameters;
  }

  setParent(parent: EcoreNode): void {
    this.parent = parent;
  }

  getParent(): EcoreNode | undefined {
    return this.parent;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getChild(index: number) {
    return this.children[index];
  }

  setChild(index: number, child: EcoreNode) {
    this.children[index] = child;
  }

  getChildren() {
    return this.children;
  }

  setChildren(children: EcoreNode[]) {
    this.children = children;
  }
}

export class EcoreModel {
  constructor(public readonly rootNodes: EcoreNode[]) { }
}

function genUniqueId(): string {
  const dateStr = Date
    .now()
    .toString(36); // convert num to base 36 and stringify

  const randomStr = Math
    .random()
    .toString(36)
    .substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}
export default genUniqueId;

