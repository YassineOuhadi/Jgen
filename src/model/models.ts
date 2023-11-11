// package
// class
import * as vscode from "vscode";

export class JgenNode extends vscode.TreeItem {
  public readonly type:
    "Root"
    //| "project"
    | "enum"
    | "literal"
    | "entity"
    | "attribute"
    | "relationship"
    | "repository"
    | "query"
    | "type"
    | "parameter"
    | "service"
    | "method"
    | "controller"
    | "path"
    | "route"
    | "operation"
    | "requestBody"
    | "requestParameter";
  public readonly name: string;

  // public readonly value: any;

  public readonly children: JgenNode[];

  constructor(type: any, name: any, children: JgenNode[] = []) {
    super(
      name,
      children.length > 0
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None
    );
    this.children = children;
    this.name = name;
    this.type = type;
  }
}


// class EPackage extends JgenNode {
//   packages: EPackage[];
//   classes: EClass[];
//   dataTypes: EDataType[];
//   constructor(name: string) {
//     super(name, "EPackage");
//     this.packages = [];
//     this.classes = [];
//     this.dataTypes = [];
//   }
// }

class Class extends JgenNode {
  attributes: Attribute[];
  // references: EReference[];
  // operations: EOperation[];
  // annotaions: EAnnotation[];
  // constraints: EConstraint[];
  // generalization: EGeneralization[];
  // association: EAssociation[];

  constructor(name: string) {
    super(name, "class");
    this.attributes = [];
    // this.references = [];
    // this.operations = [];
    // this.annotaions = [];
    // this.generalization = [];
    // this.association = [];
    // this.constraints = [];
  }
}

class Type extends JgenNode {
  constructor(name: string) {
    super(name, "type");
  }
}

class Attribute extends JgenNode {
  dataType: Type;
  isPrimaryKey: Boolean;
  constructor(name: string, type: Type, isPrimaryKey: Boolean) {
    super(name, "attribute");
    this.dataType = type;
    this.isPrimaryKey = isPrimaryKey;
  }
}

// class EReference extends JgenNode {
//   target: Class;
//   constructor(name: string, target: Class) {
//     super(name, "EReference");
//     this.target = target;
//   }
// }
// class EOperation extends JgenNode {
//   target: Class;
//   parameters: EParameter[] = []
//   constructor(name: string, target: Class) {
//     super(name, "EOperation");
//     this.target = target;
//   }
// }
// class EAnnotation extends JgenNode {
//   target: Class;
//   constructor(name: string, target: Class) {
//     super(name, "EAnnotation");
//     this.target = target;
//   }
// }
// class EParameter extends JgenNode {
//   dataType: EDataType;
//   constructor(name: string, dataType: EDataType) {
//     super(name, "EParameter");
//     this.dataType = dataType;
//   }
// }

class EConstraint extends JgenNode {
  expression: string;
  constructor(name: string, expression: string) {
    super(name, "EConstraint");
    this.expression = expression;
  }
}
class EGeneralization extends JgenNode {
  parentNode: Class;
  childNode: Class;
  constructor(name: string, parentNode: Class, childNode: Class) {
    super(name, "EGeneralization");
    this.parentNode = parentNode;
    this.childNode = childNode;
  }
}
class EAssociation extends JgenNode {
  nodeA: Class;
  nodeB: Class;
  constructor(name: string, nodeA: Class, nodeB: Class) {
    super(name, "EAssociation");
    this.nodeA = nodeA;
    this.nodeB = nodeB;
  }
}