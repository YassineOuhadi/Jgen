export interface JgenNode {
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

const nodeskeywords = ['enum', 'entity', 'relationship' ,'repository', 'service', 'controller', 'configuration'];

let currentId = 1

function extractLiteral(s: string[], i: number): EnumLiteralNode {
    const literal: EnumLiteralNode = {
                    id: currentId++,
                    name: s[i],
                    value: s[i+2],
    };
    return literal;
}

function extractAttribute(s: string[], i: number): AttributeNode {
    const attribute: AttributeNode = {
        id: currentId++,
        name: s[i],
        type: s[i + 2],
        primaryKey: false,
        nullable: false,
    };
    if (s[i + 3] === 'primaryKey' || s[i + 4] === 'primaryKey') { attribute.primaryKey = true };
    if (s[i + 3] === 'nullable' || s[i + 4] === 'nullable') { attribute.nullable = true; }
    return attribute;
}

function extractQuery(s: string[], i: number): QueryNode {
    const query: QueryNode = {
                    id: currentId++,
                    name: s[i],
                    type:s[i+1] === 'type' ? s[i+2] : '',
                    parameters: [],
    };
    return query;
}

function extractQueryParameter(s: string[], i: number): QueryParameterNode {
    const parameter: QueryParameterNode = {
                    id: currentId++,
                    name: s[i],
                    attribute: s[i+2],
    };
    return parameter;
}

function extractDslLine(newLines: string[], line: string, keyword: string, keyOcc: number): void {
    const keywordsInLine = nodeskeywords.filter(keyword => line.includes(keyword));
    let isInBeginning = 0;
    if (keywordsInLine.length > 0) {
        for (const keywordInLine of keywordsInLine) {
            let keywordOcc = 0;
            let index;
            if (keyword === keywordInLine) index = line.indexOf(keywordInLine, keyOcc);
            else index = line.indexOf(keywordInLine);
            if (index > 0) {
                const beforeKeyword = line.slice(0, index).trim();
                const afterKeyword = line.slice(index).trim();
                newLines.push(beforeKeyword.trim().replace(/\s+/g, ' '));
                keywordOcc++;
                if (afterKeyword.trim() !== '') {
                    let newLine = afterKeyword.trim().replace(/\s+/g, ' ');
                    extractDslLine(newLines, newLine, keywordInLine, keywordOcc);
                }
                isInBeginning = 1;
            }
        }
        isInBeginning === 0 ? newLines.push(line.trim().replace(/\s+/g, ' ')) : null;
    } else newLines.push(line.trim().replace(/\s+/g, ' '));
}

function cleaningDslFormat(dsl: string): string {
    const lines = dsl.split('\n');
    let modifiedLines: string[] = [];
    for (let line of lines)
        extractDslLine(modifiedLines, line, '', 0);
    return modifiedLines.join('\n');
}

function parseJgenJson(dsl: string): JgenNode {
    
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
        } 
        
        
        
        else if (line.startsWith('enum')) {
            const enumParts = line.split('enum ')[1].trim().split(/\s+/);
            currentEnum = {
                id: currentId++,
                name: enumParts[0],
                literals: [],
            };
            result.project.enums.push({ enum: currentEnum });
            if (enumParts.length > 1) {
                for (let i = 2; i < enumParts.length; i += 4) {
                    const literal: EnumLiteralNode = extractLiteral(enumParts, i);
                    currentEnum.literals.push({ literal });
                }
            }
        } else if (line.startsWith('literal')) {
            if (currentEnum) {
                const literalParts = line.split('literal ')[1].trim().split(' ');
                const literal: EnumLiteralNode = extractLiteral(literalParts, 0);
                currentEnum.literals.push({ literal });
            }
        } 
        
        
        
        else if (line.startsWith('entity')) {
            const entityParts = line.split('entity ')[1].replace(':', '').trim().split(/\s+/);
            currentEntity = {
                id: currentId++,
                name: entityParts[0],
                attributes: [],
            };
            result.project.entities.push({ entity: currentEntity });
            if (entityParts.length > 1) {
                for (let i = 2; i < entityParts.length; i += 4) {
                    const attribute: AttributeNode = extractAttribute(entityParts, i);
                    if (attribute.primaryKey) i++;
                    if (attribute.nullable) i++;
                    currentEntity.attributes.push({ attribute });
                }
            }
        } else if (line.startsWith('attribute')) {
            if (currentEntity) {
                const attributeParts = line.split('attribute ')[1].trim().split(' ');
                const attribute: AttributeNode = extractAttribute(attributeParts, 0);
                currentEntity.attributes.push({ attribute });
            }
        } 
        

        
        else if (line.startsWith('relationship')) {
            const relationshipParts = line.split('relationship ')[1].trim().split(' ');
            const relationship: RelationshipNode = {
                id: currentId++,
                from: relationshipParts[2],
                to: relationshipParts[4],
                type: relationshipParts[0],
            };
            result.project.relationships.push({ relationship });
        } 
        
        
        else if (line.startsWith('repository')) {
            if (isExternalRepositoryAppel) {
                const repositoryParts = line.split('repository ')[1].trim().split(/\s+/);
                currentRepository = {
                    id: currentId++,
                    name: repositoryParts[0],
                    entity: repositoryParts[2],
                    queries: [],
                };
                if (repositoryParts.length > 3) {
                    currentQuery = {
                        id: 0,
                        name: "",
                        type: "",
                        parameters: []
                    };;
                    for (let i = 4; i < repositoryParts.length; i += 4) {
                        if( repositoryParts[i-1] === 'query' ) { // Iteration 1 => query
                            currentQuery = extractQuery(repositoryParts, i);
                        } else if( repositoryParts[i-1] === 'parameter' ) {  // Others iterations => params
                            const parameter: QueryParameterNode = extractQueryParameter(repositoryParts, i);
                            currentQuery.parameters.push({ parameter });
                            if((repositoryParts[i+4] !== 'parameter' && i<repositoryParts.length-8) || !repositoryParts[i+4])
                                {currentRepository.queries.push({ query : currentQuery });}
                        }
                        
                    }
                }
                result.project.repositories.push({ repository: currentRepository });
            } else if (currentService) {
                const repositoryParts = line.split('repository ')[1].trim().split(' ');
                currentService.repository = repositoryParts[0];
            }
        }         
        
        else if (line.startsWith('query')) {
            if (currentRepository) {
                const queryParts = line.split('query ')[1].trim().split(' ');
                currentQuery = extractQuery(queryParts, 0);
                currentRepository.queries.push({ query: currentQuery });
                if (queryParts.length > 3) {
                    for (let i = 4; i < queryParts.length; i += 4) {
                        const parameter: QueryParameterNode = extractQueryParameter(queryParts, i);
                        currentQuery.parameters.push({ parameter });
                    }
                }
            }
        } 
        
        
        
        else if (line.startsWith('type')) {
            const typeParts = line.split('type ')[1].trim().split(' ');
            if (currentQuery && isQueryTypeAppel) {
                currentQuery.type = typeParts[0];
            } else {
                result.project.configuration.datasource.type = typeParts[0];
            }
        } 
        
        
        // service + controller + repository
        else if (line.startsWith('parameter')) {
            if (isExternalRepositoryAppel && isExternalServiceAppel) {
                // not in service & not in controller => in repository => in query
                if (currentQuery) {
                    const parameterParts = line.split('parameter ')[1].trim().split(' ');
                    const parameter: QueryParameterNode = extractQueryParameter(parameterParts, 0);
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
        } 
        //
        
        
        else if (line.startsWith('service')) {
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

const MyDSL = `
project Demo

	enum Roles //
		literal ADMIN value admin
		literal USER value user

	entity User	//
	    attribute id type Long primaryKey
		attribute username type String
		attribute email type String
		attribute role type Roles

	entity Entity
	    attribute jjd type Long

	entity Tweet
		attribute id type Long primaryKey
		attribute content type String
		attribute tags type String nullable

	relationship OneToMany from User to Tweet //

	repository userRepository for User
		query findBYName
			type SELECT
			parameter username is fullname
		query getUserByEmail
			type SELECT
			parameter email is email
		query modifyUsername
			type UPDATE
			parameter id is id
			parameter username is username

	service userService for User
		repository userRepository
		method getUserByEmail
			parameter email is email

	controller userController for User
		path /user
		service userService
		route addUser
			path /add
			operation POST
			requestBody
				parameter fullname is fullname
				parameter email is email
		route getUser
			path /get
			operation GET
			requestParameter userId is id required
		route getUserByEmail
			path /get
			operation GET
			requestParameter userEmail is email required
		route getAllUsers
			path /all
			operation GET
		route updateUser
			path /update
			operation PUT
			requestBody
				parameter fullname is fullname
				parameter email is email
		route updateUser
			path /update
			operation PUT
			requestParameter fullname is email required
			requestParameter email is email required

	configuration
		metadata
			buildTool Maven
			springVersion 3.1.6
			group com.example
			artifact demo
			name demo
			description "Demo project for Spring Boot"
			package com.example.demo
			packaging Jar
			javaVersion 17

		datasource
			type MySQL
			host localhost
			port 3306
			database mydb

		server
			host localhost
			port 9090
`.trim().replace(/\n\s+/g, '\n');

const DSLFormat = cleaningDslFormat(MyDSL);
const JSONFormat = parseJgenJson(DSLFormat);
console.log(JSON.stringify(JSONFormat, null, 4));