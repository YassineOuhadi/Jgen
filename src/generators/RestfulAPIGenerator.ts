import fs from 'fs';
import { CompositeGeneratorNode, NL, Reference, toString } from 'langium';
import path from 'path';
import { reflection, Entity, Attribute, Project, Metadata, Enum, Relationship } from '../language-server/generated/ast';
import { extractDestinationAndName } from '../cli/cli-util';
import xmlFormatter from 'xml-formatter';

let enumLiteralCounter = 0;
let model : Project;
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
    const mvnwCmdPath = path.join('/home/yassine/MDE/JGEN/src/generators/maven/', 'mvnw.cmd');
    const destinationMvnwCmdPath = path.join(projectPath, 'mvnw.cmd');
    fs.copyFileSync(mvnwCmdPath, destinationMvnwCmdPath);

    // Copy the mvnw file to the project directory
    const mvnwPath = path.join('/home/yassine/MDE/JGEN/src/generators/maven/', 'mvnw');
    const destinationMvnwPath = path.join(projectPath, 'mvnw');
    fs.copyFileSync(mvnwPath, destinationMvnwPath);

    // Copy the HELP.md file to the project directory
    const HelpPath = path.join('/home/yassine/MDE/JGEN/src/generators/maven/', 'HELP.md');
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
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>${model.configuration.metadata.springVersion}</version>
        <relativePath/>
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
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
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
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>com.vaadin.external.google</groupId>
			<artifactId>android-json</artifactId>
			<version>0.0.20131108.vaadin1</version>
			<scope>compile</scope>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.12.5</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-websocket</artifactId>
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
		<dependency>
			<groupId>org.mapstruct</groupId>
			<artifactId>mapstruct-processor</artifactId>
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

    return `
    spring.datasource.url=jdbc:mysql://${model.configuration.datasource.host.name}:${model.configuration.datasource.port.name}/${model.configuration.datasource.database.name}
    spring.datasource.username=root
    spring.datasource.password=
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect
    spring.jpa.properties.hibernate.format_sql=true
    server.port=${model.configuration.server.port.name}
    `;
}

function generateMainStructure(model: Project) { // Generate REST Core
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
    const dtosPath = path.join(mainPackagePath, 'dto');
    const constantsPath = path.join(mainPackagePath, 'constants');
    const mappersPath = path.join(mainPackagePath, 'mapper');
    const repositoriesPath = path.join(mainPackagePath, 'repository');
    const servicesPath = path.join(mainPackagePath, 'service');
    const servicesInterfacesPath = path.join(servicesPath, 'service');
    const servicesImplPath = path.join(servicesPath, 'Impl');
    const utilsPath = path.join(mainPackagePath, 'utils');
    const webPath = path.join(mainPackagePath, 'web');
    const restPath = path.join(webPath, 'rest');

    fs.mkdirSync(domainsPath, { recursive: true });
    fs.mkdirSync(dtosPath, { recursive: true });
    fs.mkdirSync(constantsPath, { recursive: true });
    fs.mkdirSync(mappersPath, { recursive: true });
    fs.mkdirSync(repositoriesPath, { recursive: true });
    fs.mkdirSync(servicesPath, { recursive: true });
    fs.mkdirSync(servicesInterfacesPath, { recursive: true });
    fs.mkdirSync(servicesImplPath, { recursive: true });
    fs.mkdirSync(utilsPath, { recursive: true });
    fs.mkdirSync(webPath, { recursive: true });
    fs.mkdirSync(restPath, { recursive: true });

    // Generate domains
    (model.structuralComponents.filter(o => o.$type === 'Entity') as Entity[]).map(o => {
        fs.writeFileSync(path.join(domainsPath, `${o.name}.java`), generateDomain(o, model.configuration.metadata.package+`.domain`));
    });

    //
}

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

function generateDomain(entity: Entity, domainPackagePath: string): string {
    const className = entity.name;
    const attributes = entity.attributes || [];

    const imports = [
        'import javax.persistence.Entity;',
        'import javax.persistence.GeneratedValue;',
        'import javax.persistence.GenerationType;',
        'import javax.persistence.Id;',
        'import javax.persistence.Table;',
        'import javax.persistence.Column;',
        'import lombok.Data;'
    ];

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

    return `package ${domainPackagePath};

${imports.join('\n')}

${annotations.join('\n')}
public class ${className} {
    ${idField}${otherFields}

    // Relationships
    ${relationships}

    // Add getters and setters here
}
`;
}

function generateRelationship(relationship: Relationship): string {
    const mappedBy = relationship.type === 'OneToMany' ? `${relationship.to.ref?.name.toLowerCase()}` :  relationship.type === 'ManyToMany' ? `${relationship.from.ref?.name.toLowerCase()}s` : null;

    const relationshipAnnotation = relationship.type !== 'ManyToOne' ? `@OneToMany(mappedBy = "${mappedBy}", cascade = CascadeType.ALL)` : `@ManyToOne(fetch = FetchType.LAZY)`;

    return relationship.type === 'ManyToOne' ? `\n\t${relationshipAnnotation}\n\tprivate ${relationship.to.ref?.name} ${relationship.to.ref?.name.toLowerCase()};` : `\n\t${relationshipAnnotation}\n\tprivate List<${relationship.to.ref?.name}> ${relationship.to.ref?.name.toLowerCase()}s;`;
}


//


// Tests

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
