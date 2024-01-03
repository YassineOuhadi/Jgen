import fs from 'fs';
import { CompositeGeneratorNode, NL, Reference, toString } from 'langium';
import path from 'path';
import { reflection, Entity, Attribute, Project, Metadata, Enum, Relationship, Repository, Query, Parameter, Service, Method, Controller, Route, RequestParameter } from '../language-server/generated/ast';
import { extractDestinationAndName } from '../cli/cli-util';
import xmlFormatter from 'xml-formatter';

/**
 *
 * @author Yassine Ouhadi
 *
 */

let enumLiteralCounter = 0;
let model: Project;
let projectPath = '';

export function generateRestfulAPI(project: Project, filePath: string, destination: string | undefined): string {
    model = project;
    const data = extractDestinationAndName(filePath, destination);
    projectPath = path.join(data.destination, project.name);

    // const fileNode = new CompositeGeneratorNode();
    // fileNode.append("// ", NL);

    // Initializ the project structure
    initializrProjectStructure(project);

    // Generate the project main part
    generateMainStructure(project);

    // Generate the project test part
    generateTestStructure(project);

    // if (!fs.existsSync(data.destination)) {
    //     fs.mkdirSync(data.destination, { recursive: true });
    // }
    // fs.writeFileSync(generatedFilePath, toString(fileNode));
    return path.join(data.destination, project.name);
}

function initializrProjectStructure(model: Project) {
    fs.mkdirSync(projectPath, { recursive: true });
    // Generate the pom.xml file
    generatePomXml(model);

    // Copy the mvnw.cmd file to the project directory
    const mvnwCmdPath = path.join(process.cwd(), '/resources/maven', 'mvnw.cmd');
    const destinationMvnwCmdPath = path.join(projectPath, 'mvnw.cmd');
    fs.copyFileSync(mvnwCmdPath, destinationMvnwCmdPath);

    // Copy the mvnw file to the project directory
    const mvnwPath = path.join(process.cwd(), '/resources/maven/', 'mvnw');
    const destinationMvnwPath = path.join(projectPath, 'mvnw');
    fs.copyFileSync(mvnwPath, destinationMvnwPath);

    // Copy the HELP.md file to the project directory
    const HelpPath = path.join(process.cwd(), '/resources/maven/', 'HELP.md');
    const destinationHelpPath = path.join(projectPath, 'HELP.md');
    fs.copyFileSync(HelpPath, destinationHelpPath);

    // Generate the project resources
    initializrProjectResources(model);
}
function generatePomXml(model: Project): void {

    if (model.configuration.metadata.tool !== "Maven" || model.configuration.metadata.packaging !== "Jar")
        throw new Error('Gradle, War generation not implemented.');;

    const pomXmlPath = path.join(projectPath, 'pom.xml');
    const pomNode = new CompositeGeneratorNode();

    // Add XML content for the pom.xml file based on the model
    // buildTool, packaging ??
    // dependecy versions
    pomNode.append(`<?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.3</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>${model.configuration.metadata.group}</groupId>
	<artifactId>${model.configuration.metadata.artifact}</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>${model.configuration.metadata.name}</name>
	<description>${model.configuration.metadata.description}</description>
	<properties>
		<java.version>${model.configuration.metadata.javaVersion}</java.version>
	</properties>
	<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.modelmapper</groupId>
            <artifactId>modelmapper</artifactId>
            <version>3.1.0</version>
        </dependency>
        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct</artifactId>
            <version>1.5.3.Final</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>`
    );
    pomNode.append(NL, '</project>');

    fs.writeFileSync(pomXmlPath, xmlFormatter(toString(pomNode)));

}

function initializrProjectResources(model: Project) {
    const srcPath = path.join(projectPath, 'src');
    const mainPath = path.join(srcPath, 'main');
    const resourcesPath = path.join(mainPath, 'resources');
    fs.mkdirSync(resourcesPath, { recursive: true });
    // Generate application.properties in the resources directory
    const applicationPropertiesPath = path.join(resourcesPath, 'application.properties');
    fs.writeFileSync(applicationPropertiesPath, generateApplicationProperties(model));
}
function generateApplicationProperties(model: Project): string {

    if (model.configuration.datasource.type !== "MySQL")
        throw new Error(`${model.configuration.datasource.type} generation not implemented.`);;

    return `spring.datasource.url=jdbc:mysql://${model.configuration.datasource.host.name}:${model.configuration.datasource.port.name}/${model.configuration.datasource.database.name}
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect
spring.jpa.properties.hibernate.format_sql=true
server.port=${model.configuration.server.port.name}
    `;
}

/*
/* Generate REST Core
*/

// Generate code structure
function generateMainStructure(model: Project) {
    const srcPath = path.join(projectPath, 'src');
    const mainPath = path.join(srcPath, 'main');
    const mainJavaPath = path.join(mainPath, 'java');

    // Dynamically generate the package path based on the model
    const packageComponents = model.configuration.metadata.package.split('.');
    const mainPackagePath = path.join(mainJavaPath, ...packageComponents);

    fs.mkdirSync(projectPath, { recursive: true });
    fs.mkdirSync(srcPath, { recursive: true });
    fs.mkdirSync(mainPath, { recursive: true });
    fs.mkdirSync(mainJavaPath, { recursive: true });
    fs.mkdirSync(mainPackagePath, { recursive: true });

    // Generate rest core files
    generateRestCore(model, mainPackagePath);
}

function generateRestCore(model: Project, mainPackagePath: string) {
    // Generate DemoApplication.java in the last main directory
    const demoApplicationPath = path.join(mainPackagePath, `${model.name}Application.java`);
    fs.writeFileSync(demoApplicationPath, generateAppMainClass(model));

    // Generate Rest core
    const domainsPath = path.join(mainPackagePath, 'domain');
    const enumsPath = path.join(mainPackagePath, 'enums');
    const dtosPath = path.join(mainPackagePath, 'dto');
    const mappersPath = path.join(mainPackagePath, 'mapper');
    const repositoriesPath = path.join(mainPackagePath, 'repository');
    const servicesPath = path.join(mainPackagePath, 'service');
    const servicesInterfacesPath = path.join(servicesPath, 'service');
    const servicesImplPath = path.join(servicesPath, 'impl');
    const utilsPath = path.join(mainPackagePath, 'utils');
    const webPath = path.join(mainPackagePath, 'web');
    const restPath = path.join(webPath, 'rest');

    fs.mkdirSync(domainsPath, { recursive: true });
    fs.mkdirSync(enumsPath, { recursive: true });
    fs.mkdirSync(dtosPath, { recursive: true });
    fs.mkdirSync(mappersPath, { recursive: true });
    fs.mkdirSync(repositoriesPath, { recursive: true });
    fs.mkdirSync(servicesPath, { recursive: true });
    fs.mkdirSync(servicesInterfacesPath, { recursive: true });
    fs.mkdirSync(servicesImplPath, { recursive: true });
    fs.mkdirSync(utilsPath, { recursive: true });
    fs.mkdirSync(webPath, { recursive: true });
    fs.mkdirSync(restPath, { recursive: true });

    // Generate enums
    (model.structuralComponents.filter(o => o.$type === 'Enum') as Enum[]).map(o => {
        fs.writeFileSync(path.join(enumsPath, `${o.name}.java`), generateEnum(o, model.configuration.metadata.package));
    });

    // Generate domains
    (model.structuralComponents.filter(o => o.$type === 'Entity') as Entity[]).map(o => {
        fs.writeFileSync(path.join(domainsPath, `${o.name}.java`), generateDomain(o, model.configuration.metadata.package));
    });

    // Generate repositories
    (model.structuralComponents.filter(o => o.$type === 'Repository') as Repository[]).map(o => {
        fs.writeFileSync(path.join(repositoriesPath, `${o.name}.java`), generateRepository(o, model.configuration.metadata.package));
    });

    // Generate services
    (model.structuralComponents.filter(o => o.$type === 'Service') as Service[]).map(o => {
        fs.writeFileSync(path.join(servicesInterfacesPath, `${o.name}.java`), generateServiceInterface(o, model.configuration.metadata.package));
        fs.writeFileSync(path.join(servicesImplPath, `${o.name}Impl.java`), generateServiceImpl(o, model.configuration.metadata.package));
    });

    // Generate controllers
    (model.structuralComponents.filter(o => o.$type === 'Controller') as Controller[]).map(o => {
        fs.writeFileSync(path.join(restPath, `${o.name}.java`), generateController(o, model.configuration.metadata.package));
    });

}

// Generate main class
function generateAppMainClass(model: Project): string {
    return `package ${model.configuration.metadata.package};

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ${model.name}Application {

    public static void main(String[] args) {
        SpringApplication.run(${model.name}Application.class, args);
    }
}`;
}

// Generate enums
function generateEnum(_enum: Enum, packagePath: string): string {
    const enumName = _enum.name;
    const literals = _enum.literals || [];

    const enumLiterals = literals.map(literal => `${literal.name}("${literal.value}")`).join(',\n\t');

    return `package ${packagePath}.enums;

public enum ${enumName} {

    // Literals
    ${enumLiterals}

    ${enumName}(String literal) {
    }
}
`;
}

// Generate domains
function generateDomain(entity: Entity, packagePath: string): string {
    const className = entity.name;
    const attributes = entity.attributes || [];

    const imports = [
        'import javax.persistence.*;',
        'import java.util.List;'
    ];

    const enumImports = attributes
        .filter(attr => attr.enumType)
        .map(attr => `import ${packagePath}.enums.${attr.enumType?.ref?.name};`)
        .join('\n');

    const annotations = [
        `@Entity`,
        `@Table(name = "${className.toLowerCase()}")`,
    ];

    const idAttribute = attributes.find(attr => attr.primaryKey);
    const idField = idAttribute
        ? `@Id\n\t@GeneratedValue(strategy = GenerationType.IDENTITY)\n\tprivate ${idAttribute.type} ${idAttribute.name};`
        : '';

    const otherFields = attributes
        .filter(attr => !attr.primaryKey)
        .map(attr => `\n\t@Column(nullable = ${attr.nullable})\n\tprivate ${attr.enumType ? attr.enumType.ref?.name : attr.type} ${attr.name};`)
        .join('\n');

    const relationships = (model.structuralComponents
        .filter(component => component.$type === 'Relationship' && component.from.ref?.name === entity.name) as Relationship[])
        .map(generateRelationship)
        .join('\n');

    return `package ${packagePath}.domain;

${imports.join('\n')}
${enumImports}

${annotations.join('\n')}
public class ${className} {
    ${idField}${otherFields}

    // Relationships
    ${relationships}

    // Add getters and setters here
}
`;
}

// Generate relationships
function generateRelationship(relationship: Relationship): string {
    const mappedBy = relationship.type === 'OneToMany' ? `${relationship.from.ref?.name.toLowerCase()}` : relationship.type === 'ManyToMany' ? `${relationship.from.ref?.name.toLowerCase()}s` : null;

    const relationshipAnnotation = relationship.type !== 'ManyToOne' ? `@OneToMany(mappedBy = "${mappedBy}", cascade = CascadeType.ALL)` : `@ManyToOne(fetch = FetchType.LAZY)`;

    return relationship.type === 'ManyToOne' ? `\n\t${relationshipAnnotation}\n\tprivate ${relationship.to.ref?.name} ${relationship.to.ref?.name.toLowerCase()};` : `\n\t${relationshipAnnotation}\n\tprivate List<${relationship.to.ref?.name}> ${relationship.to.ref?.name.toLowerCase()}s;`;
}

// Generate repositories
function generateRepository(repository: Repository, packagePath: string): string {
    const repositoryName = repository.name;
    const entityRef = repository.entity.ref;

    // Import statements
    const imports = [
        `import ${packagePath}.domain.${entityRef?.name};`,
        'import org.springframework.data.jpa.repository.JpaRepository;',
        'import org.springframework.data.repository.query.Param;',
        'import java.util.List;'
    ];

    // Query methods
    const queryMethods = repository.queries.map(generateQueryMethod.bind(null, entityRef!)).join('\n\t');

    // Generate repository interface
    return `package ${packagePath}.repository;

${imports.join('\n')}
public interface ${repositoryName} extends JpaRepository<${entityRef?.name}, ${entityRef?.attributes.filter(attr => attr.primaryKey)[0].type}> {

    // Query methods
    ${queryMethods}
}
`;
}

function getReturnType(entity: Entity, query: Query): string {
    let returnType;
    if (query.type === "SELECT") {
        if (query.parameters.filter(param => entity.attributes.find(attr => attr.name === param.attribute)?.primaryKey === true).length === 0)
            returnType = `List<${entity.name}>`;
        else returnType = entity.name;
    } else {
        returnType = 'void';
    }
    return returnType;
}

// Generate queries
function generateQueryMethod(entity: Entity, query: Query): string {
    const queryName = query.name;
    const returnType = getReturnType(entity, query);

    const parameters = query.parameters.map(p => generateParameter(entity, p, true)).join(', ');

    return `${returnType} ${queryName}(${parameters});`;
}

// Generate parameters
function generateParameter(entity: Entity, parameter: Parameter | RequestParameter, isFromRepository?: Boolean): string {
    const paramName = parameter.name;
    const attribute = parameter.attribute;
    const attributeInfo = entity.attributes.find(attr => attr.name === attribute);

    if (!attributeInfo)
        throw new Error(`Attribute '${attribute}' not found in entity '${entity.name}'`);

    const paramType = attributeInfo.enumType ? attributeInfo.enumType.ref?.name : attributeInfo.type;
    // const required = parameter.required ? '' : '?';

    if (isFromRepository !== undefined) {
        if (isFromRepository === true) return `@Param("${attribute}") ${paramType} ${paramName}`;
        return `${paramType} ${paramName}`;
    }
    return `${paramName}`;
}

// Generate service interface
function generateServiceInterface(service: Service, packagePath: string): string {
    const serviceName = service.name;
    const entityRef = service.entity.ref;

    // Import statements
    const imports = [
        `import ${packagePath}.domain.${entityRef?.name};`,
        'import java.util.List;'
    ];

    // Generate service methods
    const serviceMethods = generateServiceMethods(service, service.methods, false);

    // Generate service interface
    return `package ${packagePath}.service.service;

${imports.join('\n')}
public interface ${serviceName} {

    // Service methods
    ${serviceMethods}
}
`;
}

// Service methods generator
function generateServiceMethods(service: Service, methods: Array<Method>, isImpl: boolean): string {
    if (!isImpl) {
        return methods.map(method => {
            const methodName = method.name;
            const parameters = method.parameters.map(p => generateParameter(service.entity.ref!, p, false)).join(', ');
            const returnType = getReturnType(service.entity.ref!, service.repository.ref?.queries.find(q => q.name === methodName)!);
            return `public ${returnType} ${methodName}(${parameters});`;
        }).join('\n');
    } else {
        return methods.map(method => {
            const repositoryRef = service.repository.ref;
            const methodName = method.name;
            const parameters = method.parameters.map(p => generateParameter(service.entity.ref!, p, false)).join(', ');
            const returnType = getReturnType(service.entity.ref!, service.repository.ref?.queries.find(q => q.name === methodName)!);

            let treatment;
            if (returnType === "void")
                treatment = `${repositoryRef?.name.toLowerCase()}.${methodName}(${method.parameters.map(p => generateParameter(service.entity.ref!, p)).join(', ')});`;
            else treatment = `return ${repositoryRef?.name.toLowerCase()}.${methodName}(${method.parameters.map(p => generateParameter(service.entity.ref!, p)).join(', ')});`;

            return `@Override
    public ${returnType} ${methodName}(${parameters}) {
        log.info("Inside ${methodName} {}", ${method.parameters.map(p => generateParameter(service.entity.ref!, p))});

        ${treatment}
    };`;
        }).join('\n');
    }
}

// Generate service implementation
function generateServiceImpl(service: Service, packagePath: string): string {
    const serviceName = service.name;
    const entityRef = service.entity.ref;
    const repositoryRef = service.repository.ref;

    // Import statements
    const imports = [
        `import ${packagePath}.domain.${entityRef?.name};`,
        `import ${packagePath}.repository.${repositoryRef?.name};`,
        `import ${packagePath}.service.service.${serviceName};`,
        'import org.springframework.beans.factory.annotation.Autowired;',
        'import org.springframework.stereotype.Service;',
        'import lombok.extern.slf4j.Slf4j;',
        'import java.util.List;'
    ];

    // Generate service methods
    const serviceMethods = generateServiceMethods(service, service.methods, true);

    // Generate service implementation
    return `package ${packagePath}.service.impl;

${imports.join('\n')}

@Service
public class ${serviceName}Impl implements ${serviceName} {

    @Autowired
    private final ${repositoryRef?.name} ${repositoryRef?.name.toLowerCase()};
    
    @Autowired
    public ${serviceName}Impl(${repositoryRef?.name} ${repositoryRef?.name.toLowerCase()}) {
        this.${repositoryRef?.name.toLowerCase()} = ${repositoryRef?.name.toLowerCase()};
    }

    ${serviceMethods}
}`;
}

// Generate controllers
function generateController(controller: Controller, packagePath: string): string {
    const controllerName = controller.name;
    const controllerPath = controller.path;
    const entityRef = controller.entity.ref;
    const serviceRef = controller.service.ref;

    // Import statements
    const imports = [
        `import ${packagePath}.domain.${entityRef?.name};`,
        `import ${packagePath}.service.service.${serviceRef?.name};`,
        'import org.springframework.beans.factory.annotation.Autowired;',
        'import org.springframework.web.bind.annotation.*;',
        'import java.util.List;',
        'import lombok.extern.slf4j.Slf4j;'
    ];

    // Controller routes
    const controllerRoutes = controller.routes.map(route => generateControllerRoute(controller, route)).join('\n\t');

    // Generate controller
    return `package ${packagePath}.web.rest;

${imports.join('\n')}
@Slf4j
@RestController
@RequestMapping(path = "${controllerPath}")
public class ${controllerName} {

    @Autowired
    private final ${serviceRef?.name} ${serviceRef?.name.toLowerCase()};

    @Autowired
    public ${controllerName}(${serviceRef?.name} ${serviceRef?.name.toLowerCase()}) {
        this.${serviceRef?.name.toLowerCase()} = ${serviceRef?.name.toLowerCase()};
    }

    // Controller routes
    ${controllerRoutes}
}
`;
}

// Generate controller routes
function generateControllerRoute(controller: Controller, route: Route): string {
    const routeName = route.name;
    const operation = route.operation.name;
    const routePath = route.path.name;
    const requestBody = route.requestBody;
    const requestParameters = route.requestParameters;
    const entityRef = controller.entity.ref;
    const serviceRef = controller.service.ref;

    // Route annotation
    const routeAnnotation = `@${operation}`;

    // Path annotation
    const pathAnnotation = `@RequestMapping(path = "${routePath}", method = RequestMethod.${operation})`;

    let returnType = getReturnType(controller.entity.ref!, controller.service.ref?.repository.ref?.queries.find(q => q.name === routeName)!);

    // Method signature
    let methodSignature = `public `;
    methodSignature += returnType;
    methodSignature += `${routeName}(`;

    // Method parameters
    const parameters = [];

    // RequestBody parameter
    if (requestBody) {
        const requestBodyParameters = requestBody.parameters.map(parameter => {
            const attributeInfo = entityRef?.attributes.find(attr => attr.name === parameter.attribute);
            if (!attributeInfo)
                throw new Error(`Attribute '${parameter.attribute}' not found in entity '${entityRef?.name}'`);
            const paramType = attributeInfo.enumType ? attributeInfo.enumType.ref?.name : attributeInfo.type;
            return `@RequestBody ${paramType} ${parameter.name}`;
        });
        parameters.push(...requestBodyParameters);
    }

    // RequestParameter parameters
    const requestParameterParameters = requestParameters.map(parameter => {
        const attributeInfo = entityRef?.attributes.find(attr => attr.name === parameter.attribute);
        if (!attributeInfo)
            throw new Error(`Attribute '${parameter.attribute}' not found in entity '${entityRef?.name}'`);
        const paramType = attributeInfo.enumType ? attributeInfo.enumType.ref?.name : attributeInfo.type;
        return `@RequestParam ${paramType} ${parameter.name}`;
    });
    parameters.push(...requestParameterParameters);

    methodSignature += parameters.join(', ') + ')';

    // Method body (to be implemented based on your requirements)
    let treatment;

    let params;
    if (requestBody) {
        params = route.requestBody?.parameters.map(p => p.name).join(', ');
    } else if (requestParameters) {
        params = route.requestParameters.map(p => p.name).join(', ');
    }
    
    if (returnType === "void")
        treatment = `${serviceRef?.name.toLowerCase()}.${routeName}(${params});`;
    else treatment = `return ${serviceRef?.name.toLowerCase()}.${routeName}(${params});`;


    return `
    ${routeAnnotation}
    ${pathAnnotation}
    ${methodSignature} {
        // Implement your logic here
        ${treatment}
    }
`;
}

/*
/* Generate tests
*/

// Generate code structure
function generateTestStructure(model: Project) {
    const srcPath = path.join(projectPath, 'src');
    const testPath = path.join(srcPath, 'test');
    const testJavaPath = path.join(testPath, 'java');

    // Dynamically generate the package path based on the model for test
    const testPackageComponents = model.configuration.metadata.package.split('.');
    const testPackagePath = path.join(testJavaPath, ...testPackageComponents);

    fs.mkdirSync(testPath, { recursive: true });
    fs.mkdirSync(testJavaPath, { recursive: true });
    fs.mkdirSync(testPackagePath, { recursive: true });

    // Generate test files
    generateTestCore(model, testPackagePath);
}

function generateTestCore(model: Project, testPackagePath: string) {
    // Generate DemoApplicationTests.java in the test directory
    const demoApplicationTestsPath = path.join(testPackagePath, `${model.name}ApplicationTests.java`);
    fs.writeFileSync(demoApplicationTestsPath, generateDemoApplicationTests(model));

    // ..
}

// Generate main class
function generateDemoApplicationTests(model: Project): string {
    return `package ${model.configuration.metadata.package};

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ${model.name}ApplicationTests {

    @Test
    void contextLoads() {
    }

}`;
}

/*
end
*/
