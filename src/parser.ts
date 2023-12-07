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

let currentId = 0;

let DslLine: string;

function getKeywordsOccurrences(line: string): { [key: string]: number } {
    let keywordOccurrences: { [key: string]: number } = {};

    nodeskeywords.forEach(keyword => {
        const occurrences = (line.match(new RegExp(keyword, 'g')) || []).length;
        if (occurrences > 0) {
            keywordOccurrences[keyword] = occurrences;
        }
    });

    return keywordOccurrences;
}

function extractDslLine(newLines: string[], line: string, keyword: string, keywordOcc: number): void {
    
    const commentIndex = line.indexOf('//');
    if (commentIndex > 0)
        line = line.slice(0, commentIndex).trim();
    
    let keywordsOccurrences = getKeywordsOccurrences(DslLine);

    const keywordsInLine = nodeskeywords.filter(keyword => line.includes(keyword));
    if (keywordsInLine.length > 0) {
        
        for (const keywordInLine of keywordsInLine) {

            let index;
            if( keyword !== '' && keyword === keywordInLine )
                index = line.indexOf(keyword, keywordOcc);
            else if( keyword !== '' )
                index = line.indexOf(keyword);
            else
                index = line.indexOf(keywordInLine);
            
            if ( index >= 0 ) {
                
                const beforeKeyword = line.slice(0, index).trim();
                const afterKeyword = line.slice(index).trim();
                newLines.push(beforeKeyword.trim().replace(/\s+/g, ' '));

                if(Object.values(getKeywordsOccurrences(afterKeyword)).reduce((a, b) => a + b, 0) === 1)
                    newLines.push(afterKeyword.trim().replace(/\s+/g, ' '));
                
                else if(Object.values(getKeywordsOccurrences(afterKeyword)).reduce((a, b) => a + b, 0) > 1 && index > 0 ) {
                    keywordOcc++;
                    if (afterKeyword.trim() !== '') {
                        let newLine = afterKeyword.trim().replace(/\s+/g, ' ');
                        extractDslLine(newLines, newLine, keyword === '' ? keywordInLine : keyword, keywordOcc);
                    }
                }
            } 
            
            else if ((keyword !== '' && keywordOcc === keywordsOccurrences[keyword]) || (Object.values(keywordsOccurrences).reduce((a, b) => a + b, 0) === 1))
               newLines.push(line.trim().replace(/\s+/g, ' '));
        }
        
    } else newLines.push(line.trim().replace(/\s+/g, ' '));
}

function cleaningDslFormat(dsl: string): string {
    const lines = dsl.split('\n');
    let modifiedLines: string[] = [];
    for (let line of lines) {
        DslLine= line;
        extractDslLine(modifiedLines, line, '', 0);
    }
    return modifiedLines.join('\n');
}

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

export function parseJgenJson(dsl: string): JgenNode {

	currentId = 0;

	dsl = cleaningDslFormat(dsl.trim().replace(/\n\s+/g, '\n'));
    
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
                id: currentId++,
                metadata: {
                    id: currentId++,
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
                    id: currentId++,
                    type: '',
                    host: '',
                    port: 0,
                    database: '',
                },
                server: {
                    id: currentId++,
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

export function parseJSONToJgenFormat(data: JgenNode): string {
    let jgenString = `\nproject ${data.project.name}\n\n`;

    // Convert Enums
    for (const enumData of data.project.enums) {
        jgenString += `\tenum ${enumData.enum.name}\n`;
        for (const literal of enumData.enum.literals) {
            jgenString += `\t\tliteral ${literal.literal.name} value ${literal.literal.value}\n`;
        }
        jgenString += '\n';
    }

    // Convert Entities
    for (const entityData of data.project.entities) {
        console.log("entity data",entityData);
        jgenString += `\tentity ${entityData.entity.name}\n`;
        for (const attribute of entityData.entity.attributes) {
            jgenString += `\t\tattribute ${attribute.attribute.name} type ${attribute.attribute.type}`;
            if (attribute.attribute.primaryKey) {
                jgenString += ' primaryKey';
            }
            if (attribute.attribute.nullable) {
                jgenString += ' nullable';
            }
            jgenString += '\n';
        }
        jgenString += '\n';
    }

    // Convert Relationships
    for (const relationshipData of data.project.relationships) {
        const relationship = relationshipData.relationship;
        jgenString += `\trelationship ${relationship.type} from ${relationship.from} to ${relationship.to}\n\n`;
    }

    // Convert Repositories
    for (const repositoryData of data.project.repositories) {
        const repository = repositoryData.repository;
        jgenString += `\trepository ${repository.name} for ${repository.entity}\n`;
        for (const query of repository.queries) {
            const queryData = query.query;
            jgenString += `\t\tquery ${queryData.name}\n`;
            jgenString += `\t\t\ttype ${queryData.type}\n`;
            for (const parameter of queryData.parameters) {
                const parameterData = parameter.parameter;
                jgenString += `\t\t\tparameter ${parameterData.name} is ${parameterData.attribute}\n`;
            }
        }
        jgenString += '\n';
    }

    // Convert Services
    for (const serviceData of data.project.services) {
        const service = serviceData.service;
        jgenString += `\tservice ${service.name} for ${service.entity}\n`;
        jgenString += `\t\trepository ${service.repository}\n`;
        for (const method of service.methods) {
            const methodData = method.method;
            jgenString += `\t\tmethod ${methodData.name}\n`;
            for (const parameter of methodData.parameters) {
                const parameterData = parameter.parameter;
                jgenString += `\t\t\tparameter ${parameterData.name} is ${parameterData.attribute}\n`;
            }
        }
        jgenString += '\n';
    }

    // Convert Controllers
    for (const controllerData of data.project.controllers) {
        const controller = controllerData.controller;
        jgenString += `\tcontroller ${controller.name} for ${controller.entity}\n`;
        jgenString += `\t\tpath ${controller.path}\n`;
        jgenString += `\t\tservice ${controller.service}\n`;
        for (const route of controller.routes) {
            const routeData = route.route;
            jgenString += `\t\troute ${routeData.name}\n`;
            jgenString += `\t\t\tpath ${routeData.path}\n`;
            jgenString += `\t\t\toperation ${routeData.operation}\n`;
            if (routeData.requestParameters) {
                for (const requestParameter of routeData.requestParameters) {
                    const parameterData = requestParameter.requestParameter;
                    jgenString += `\t\t\trequestParameter ${parameterData.name} is ${parameterData.attribute} ${parameterData.isRequired ? 'required' : ''}\n`;
                }
            }
            if (routeData.requestBody) {
                jgenString += `\t\t\trequestBody\n`;
                for (const parameter of routeData.requestBody.parameters) {
                    const parameterData = parameter.parameter;
                    jgenString += `\t\t\t\tparameter ${parameterData.name} is ${parameterData.attribute}\n`;
                }
            }
        }
        jgenString += '\n';
    }

    // Convert Configuration
    const configuration = data.project.configuration;
    jgenString += `\tconfiguration\n`;
    jgenString += `\t\tmetadata\n`;
    jgenString += `\t\t\tbuildTool ${configuration.metadata.buildTool}\n`;
    jgenString += `\t\t\tspringVersion ${configuration.metadata.springVersion}\n`;
    jgenString += `\t\t\tgroup ${configuration.metadata.group}\n`;
    jgenString += `\t\t\tartifact ${configuration.metadata.artifact}\n`;
    jgenString += `\t\t\tname ${configuration.metadata.name}\n`;
    jgenString += `\t\t\tdescription "${configuration.metadata.description}"\n`;
    jgenString += `\t\t\tpackage ${configuration.metadata.package}\n`;
    jgenString += `\t\t\tpackaging ${configuration.metadata.packaging}\n`;
    jgenString += `\t\t\tjavaVersion ${configuration.metadata.javaVersion}\n\n`;

    jgenString += `\t\tdatasource\n`;
    jgenString += `\t\t\ttype ${configuration.datasource.type}\n`;
    jgenString += `\t\t\thost ${configuration.datasource.host}\n`;
    jgenString += `\t\t\tport ${configuration.datasource.port}\n`;
    jgenString += `\t\t\tdatabase ${configuration.datasource.database}\n\n`;

    jgenString += `\t\tserver\n`;
    jgenString += `\t\t\thost ${configuration.server.host}\n`;
    jgenString += `\t\t\tport ${configuration.server.port}\n`;

    return jgenString;
}