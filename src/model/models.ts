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
    | "from"
    | "to"
    | "repository"
    | "reference"
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
    | "requestParameter"
    | "configuration"
    | "metadata"
    | "buildTool"
    | "springVersion"
    | "group"
    | "artifact"
    | "name"
    | "description"
    | "package"
    | "packaging"
    | "javaVersion"
    | "datasource"
    // | "type"
    | "host"
    | "port"
    | "database"
    | "server";
    // | "host"
    // | "port"

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

class Enum extends JgenNode {
  literals: Literal[];
  constructor(name: string) {
    super(name, "enum");
    this.literals = [];
  }
}

class Literal extends JgenNode {
  value: string;
  constructor(name: string, value: string) {
    super(name, "literal");
    this.value = value;
  }
}

class Entity extends JgenNode {
  attributes: Attribute[];
  constructor(name: string) {
    super(name, "entity");
    this.attributes = [];
  }
}

class Attribute extends JgenNode {
  dataType: String | Enum;
  isPrimaryKey: Boolean;
  isNullable: Boolean;
  constructor(name: string, type: String | Enum, isPrimaryKey: Boolean, isNullable: Boolean) {
    super(name, "attribute");
    this.dataType = type;
    this.isPrimaryKey = isPrimaryKey;
    this.isNullable = isNullable;
  }
}

class Relationship extends JgenNode {
  from: Entity;
  to: Entity;
  relationshipType: String;
  constructor(name: string, from: Entity, to: Entity, relationshipType: String) {
    super(name, "relationship");
    this.from = from;
    this.to = to;
    this.relationshipType = relationshipType;
  }
}

class Repository extends JgenNode {
  entity: Entity;
  queries: Query[];
  constructor(name: string, entity: Entity) {
    super(name, "repository");
    this.entity = entity;
    this.queries = [];
  }
}

// class Reference extends JgenNode {
//   constructor(name: string) {
//     super(name, "reference");
//   }
// }

class Query extends JgenNode {
  queryType: string;
  parameters: Parameter[];
  constructor(name: string, queryType: string) {
    super(name, "query");
    this.queryType = queryType;
    this.parameters = [];
  }
}

class Parameter extends JgenNode {
  attributeName: string;
  isRequired: Boolean;
  constructor(name: string, attributeName: string, isRequired: Boolean) {
    super(name, "parameter");
    this.attributeName = attributeName;
    this.isRequired = isRequired;
  }
}

class Service extends JgenNode {  
  entity: Entity;
  repository: Repository;
  methods: Method[];
  constructor(name: string, entity: Entity, repository: Repository) {
    super(name, "service");
    this.entity = entity;
    this.repository = repository;
    this.methods = [];
  }
}

class Method extends JgenNode {
  // return
  parameters: Parameter[];
  constructor(name: string) {
    super(name, "method");
    this.parameters = [];
  }
}

class Controller extends JgenNode {
  entity: Entity;
  service: Service;
  routes: Route[];
  constructor(name: string, entity: Entity, service: Service) {
    super(name, "controller");
    this.entity = entity;
    this.service = service;
    this.routes = [];
  }
}

class Route extends JgenNode {
  // return
  path: string;
  operation: Operation;
  requestParameters?: RequestParameter[];
  requestBody?: RequestBody;

  constructor(name: string, path: string, operation: Operation, isParamsInBody: Boolean) {
    super(name, "route");
    this.path = path;
    this.operation = operation;
    if(isParamsInBody) {
      this.requestBody = new RequestBody("body") ;
      this.requestBody.parameters = [];
    } else {
      this.requestParameters = [];
    }
  }
}

class Operation extends JgenNode {
  constructor(name: string) {
    super(name, "operation");
  }
}

class RequestParameter extends JgenNode {
  attributeName: string;
  isRequired: Boolean;
  constructor(name: string, attributeName: string, isRequired: Boolean) {
    super(name, "requestParameter");
    this.attributeName = attributeName;
    this.isRequired = isRequired;
  }
}

class RequestBody extends JgenNode {
  parameters: Parameter[];
  constructor(name: string) {
    super(name, "requestBody");
    this.parameters = [];
  }
}

class Configuration extends JgenNode {
  metadata: Metadata;
  datasource: Datasource;
  server: Server;
  constructor(name: string, metadata: Metadata, datasource: Datasource, server: Server) {
    super(name, "configuration");
    this.metadata = metadata;
    this.datasource = datasource;
    this.server = server;
  }
}

class Metadata extends JgenNode {
  buildTool: string;
  springVersion: string;
  group: string;
  artifact: string;
  projectName: string;
  projectDescription: string;
  projectPackage: string;
  packaging: string;
  javaVersion: number;
  constructor(
              name: string,
              buildTool: string, 
              springVersion: string, 
              group: string,
              artifact: string, 
              projectName: string, 
              projectDescription: string, 
              projectPackage: string, 
              packaging: string, 
              javaVersion: number
            ) {
    super(name, "metadata");
    this.buildTool = buildTool;
    this.springVersion = springVersion;
    this.group = group;
    this.artifact = artifact;
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.projectPackage = projectPackage;
    this.packaging = packaging;
    this.javaVersion = javaVersion;
  }
}

class Datasource extends JgenNode {
  datasourceType: string;
  host: string;
  port: string;
  databaseName: string;
  constructor(
              name: string,
              datasourceType: string, 
              host: string, 
              port: string,
              databaseName: string
            ) {
    super(name, "datasource");
    this.datasourceType = datasourceType;
    this.host = host;
    this.port = port;
    this.databaseName = databaseName;
  }
}

class Server extends JgenNode {
  host: string;
  port: string;
  constructor(
              name: string,
              host: string, 
              port: string
            ) {
    super(name, "server");
    this.host = host;
    this.port = port;
  }
}