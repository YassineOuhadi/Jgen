# Welcome to Jgen Vs Code Extension

<img src='https://github.com/YassineOuhadi/Jgen/assets/109771302/6ef3ebd1-56f2-4175-802b-60179011fd50' width='80'>

## Introduction

Language Server Protocol is an open-source protocol for language services developed by Microsoft. It enables code editors and IDEs to communicate with external language services to provide features such as syntax highlighting, code completion, code navigation, code checking, code modification.

Langium is a tool for linguistic engineering that supports the Language Server protocol and is open-source, is similar to the Xtext grammar. It is written in TypeScript and works under Node.js. Langium can be used for various tasks such as code analysis, code generation, and auto-completion.

Jgen, the DSL, is constructed on the Spring Boot REST API Ecore metamodel, developed using Langium. Additionally, a CLI is implemented to generate code from DSL, facilitating transformation M2M between Ecore and Jgen metamodels, as well as transformation M2T when generating Spring Boot RESTful APIs.

The VS Code extension for the Jgen DSL allows the implementation of code validations, code completion, syntax highlighting, and a server protocol language. It features a tree view that synchronizes with the Jgen editor.

> Clone the repository to your local machine ussing the cmd: `git clone https://github.com/YassineOuhadi/Jgen.git`

## Features

1. Domain specific language using Langium.
2. Semantic validators for our DSL based on TypeScript code.
3. Customizing the Jgen CLI.
4. Parser for Jgen DSL that outputs JSON format.
5. Transformation M2M between Ecore model and Jgen DSL.
6. Generate Java RESTful APIs from Jgen DSL.
7. Building an Extension.
   - Open Jgen file.
   - Initialize Jgen file.
   - Import Ecore / JSON file.
8. Tree view for Extension.
9. Monaco Editor.
10. Generation in the Web.

## Jgen Metamodel

This is the Ecore metamodel for our DSL. It represents the metamodel of the basic functionalities of Spring Boot REST APIs. We need this metamodel for our M2M or M2T transformations, allowing us to perform transformations between different metamodels or generate code from the metamodel.

![jgen metamodel ecore](https://github.com/YassineOuhadi/Jgen/assets/109771302/c842fce7-2ec1-4261-87d1-e60505a524e6)

## DSL for Generating Spring Boot REST APIs using Langium

Based on the metamodel, we generated the Xtext grammar. Since the Langium grammar is similar to Xtext, we simply personalized it.

### Jgen Grammar

```
grammar Jgen

entry Project:
    'project' name=ID
    (structuralComponents+=StructuralComponent )*
    configuration=Configuration;

Entity:
    'entity' name=ID
    (attributes+=Attribute)*;

Attribute:
    'attribute' name=ID 'type' (enumType=[Enum] | type=DATATYPE) (nullable?='nullable')? (unique?='unique')? (primaryKey?='primaryKey')?;

StructuralComponent:
    Enum | Entity | Relationship | Repository | Controller | Service;

Repository:
    'repository' name=ID
        'entity' entity=[Entity:ID]
        (queries+=Query)*;

Service:
    'service' name=ID
        'repository' repository=[Repository:ID]
        (methods+=Method)*;

Controller:
    'controller' name=ID
        'path' path=PATH
        'service' service=[Service:ID]
        (routes+=Route)*;

Route:
    'route' name=ID
        path=Path
        operation=Operation
        (requestBody=RequestBody | (requestParameters+=RequestParameter)*)
        responseType=ResponseType;

Parameter:
    'parameter' name=ID 'is' attribute=ID (required?='required')?;

RequestParameter:
    'requestParameter' name=ID 'is' attribute=ID (required?='required')?;
RequestBody:
    'requestBody'
    (parameters+=Parameter)+;

Path:
    'path' name=PATH;

Operation:
    'operation' name=OPERATION;

ResponseType:
     'responseType' (entity=[Entity:ID] | string=DATATYPE);

Relationship:
    'relationship' type=RELATIONSHIP 'from' from=[Entity:ID] 'to' to=[Entity:ID];

Method:
    'method' name=ID
    (parameters+=Parameter)*;

Query:
    'query' name=ID (
    ('type' type=QUERY_TYPE)?
    (parameters+=Parameter)*)?;

Enum:
    'enum' name=ID
    (literals+=Literal)*;

Literal:
    'literal' name=ID 'value' value=ID;
    
Configuration:
    'configuration'
        metadata = Metadata &
        datasource = Datasource &
        server = Server;

Datasource:
    'datasource' 'type' type=DATABASE_TYPE 
        host=Host 
        port=Port 
        database=Database;

Server:
    'server' host=Host port=Port;

Host:
    'host' name=ID;

Port:
    'port' name=INT;

Database:
    'database' name=ID;

Metadata:
    'metadata'
        'buildTool' tool=BUILDTOOL &
        'springVersion' springVersion=('3.2.0' | '3.1.6' | '3.1.5' | '3.0.13' | '3.0.12' | '2.7.18' | '2.7.17') &
        'group' group=QualifiedName &
        'artifact' artifact=ID &
        'name' name=QualifiedName &
        'description' description=STRING &
        'package' package=QualifiedName &
        'packaging' packaging=('Jar' | 'War') &
        'javaVersion' javaVersion=('8' | '11' | '17' | '21');

QualifiedName returns string:
    ID ('.' ID)*;

terminal Dependency returns string: /SpringBootStarter|SpringDataJPA/;
terminal RELATIONSHIP returns string: /OneToOne|OneToMany|ManyToOne|ManyToMany/;
terminal BUILDTOOL returns string: /Gradle|Maven/;
terminal DATATYPE returns string: /Integer|Long|Float|String|Boolean/;
terminal OPERATION returns string: /POST|GET|PUT|PATCH|DELETE/;
terminal DATABASE_TYPE returns string: /MySQL|Oracle|Mongodb|Maruadn/;
terminal QUERY_TYPE returns string: /INSERT|UPDATE|SELECT|DELETE/;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal STRING returns string: /"[^"]*"|'[^']*'/;
terminal PATH returns string: /[/][_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
```

## Jgen Extension Architecture

This diagram illustrates the general architecture of our Jgen extension:

![mde jgen arch diagram](https://github.com/YassineOuhadi/Jgen/assets/109771302/d15ade27-b16d-4826-8939-9de2125c089b)

## Language Server Protocol (LSP)

The communication between the VS Code extension runtime / Web editor and the language server is facilitated through the LSP protocol to enable functionalities such as auto-completion, syntax highlighting, validation, generation, and more.

![mde jgen lsp](https://github.com/YassineOuhadi/Jgen/assets/109771302/8f611814-65f6-459c-8c3a-9fe655979985)

## Overview

## Get started

 * Run `npm run langium:generate` to generate TypeScript code from the grammar definition.
 * Run `npm run build` to compile all TypeScript code.
 * Run `npm run build:web` and `npm run serve` to start web editor.
 * Press `F5` to open a new window with the Jgen extension loaded.
 * Create a new file with a file name suffix `.jgen`.
 * Verify that syntax highlighting, validation, completion, etc. are working as expected.
 * Run `./bin/cli` to see options for the CLI; `./bin/cli generate <file>` generates code for a given DSL file.
  * To generate REST code for a given DSL file with a specified destination, use the following command: 
    - `./bin/cli generateRESTfulAPI --help` to see options and help for the `generateRESTfulAPI` command.
    - `./bin/cli generateRESTfulAPI -d <destination-path> -p <file>` for file path or `./bin/cli generateRESTfulAPI -d <destination-path> -c "<jgen-content>"` for direct content. Replace `<destination-path>` with the desired directory path where you want to store the generated code.
  * To validate Grammar for a given DSL instance use the following command: 
    - `./bin/cli validateGrammar <file>`.
  * To generate Ecore code / JSON format for a given DSL file with a specified destination, use the following command: 
    - `./bin/cli generateEcore / generateJson -d <destination-path> <file>`.

## Get started with the Docker image

* To generate code for a given DSL file with a specified destination using the Docker image:

    * Pull the Jgen CLI image from Docker Hub:
    ```bash
    docker pull yassineouhadi/jgen:cli
    ```
    * Run the Jgen CLI image, specifying the `-v` volume option to set the output path:
    ```bash
    docker run -it -v <destination-path>:/jgen/generated yassineouhadi/jgen:cli generateRESTfulAPI -c <content>
    ```
    You can use `"$(cat ./path/to/file)"` to pass the content of a local file as input.

* To use the Monaco Editor:

    * Pull the Jgen Web image from Docker Hub:
    ```bash
    docker pull yassineouhadi/jgen:web
    ```
    * Run the Jgen Web image on localhost:3000:
    ```bash
    docker run -p 3000:3000 yassineouhadi/jgen:web
    ```

## Use case - Generate Spring Boot RESTful API

### Jgen Instance

You can write your Jgen code in the VS Code extension runtime window using the tree view offered by the Jgen extension, or in the Monaco editor. You also have the possibility to initialize the Jgen code and personalize it.

Here is an example of our Jgen instance, the main idea is to generate code that corresponds to CRUD operations for entities such as User and Tweet. This instance includes specifications for entities, relationships, repositories, services, and controllers:

```
project Demo

	enum Roles
		literal ADMIN value admin
		literal USER value user

	entity User
		attribute id type Long primaryKey
		attribute fullname type String
		attribute email type String
		attribute role type Roles

	entity Tweet
		attribute id type Long primaryKey
		attribute content type String
		attribute tags type String nullable

	relationship OneToMany from User to Tweet

	relationship ManyToOne from Tweet to User

	repository userRepository
	    entity User
		query getUserByEmail
			type SELECT
			parameter email is email required

	repository tweetRepository
	    entity Tweet
		query newTweet
			type INSERT
			parameter content is content required
			parameter tags is tags

	service userService
		repository userRepository
		method getUserByEmail
			parameter email is email required

    service tweetService
		repository tweetRepository
		method newTweet
			parameter content is content required
			parameter tags is tags

	controller userController
		path /user
		service userService
		route getUserByEmail
			path /get
			operation GET
			requestParameter userEmail is email required
			responseType User

    controller tweetController
		path /tweet
		service tweetService
		route newTweet
			path /get
			operation POST
			requestBody
			    parameter content is content required
			    parameter tags is tags
			responseType String
			
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
			database jgen
		server
			host localhost
			port 9090		
```

> If you don't use Monaco Editor or the extension's runtime window, you can validate your Jgen code using the Command Line Interface (CLI). Refer to the instructions at the top to learn how to do this.

### Extention Editor - Tree View

This is the corresponding tree view for our Jgen instance. You can use it to create your entities, services, repositories .. etc, and all changes are synchronized with the corresponding Jgen file:

![jgen-treeview](https://github.com/YassineOuhadi/Jgen/assets/109771302/1dc46a59-62cd-4f23-92ba-5fb00e9ed699)

### Monaco Editor - Web Editor

This is the web editor integrated with the same functionalities as our extension runtime, thanks to the use of LSP and Monaco. It allows us to create Jgen code directly on a website, which is extremely convenient, especially for code generation. Here is an example of our Jgen instance.

![jgen web editor](https://github.com/YassineOuhadi/Jgen/assets/109771302/213436a4-5dae-4c76-b0e3-7231a5d2eac0)

### Code generation using CLI

For the code generation of our Jgen instance using the CLI, as indicated in the source code structure, the Jgen instance exists in `./example/test/jgen`. We generate a Jgen file from this path, and the destination is `/generated` in the same root directory. The command for this process is `./bin/cli generateRESTfulAPI -d /generated -p ./example/test.jgen`.

The generated code for our instance is as follows:

![jgen codegenrated](https://github.com/YassineOuhadi/Jgen/assets/109771302/7e6b687d-3224-4d1d-8b96-fd532d41c833)

### Code generation in the Web

> For code generation, we plan to enhance this feature in the upcoming versions of Jgen, allowing users to generate their Rest API without relying on the CLI. It will be a purely web-based solution.

## Perspectives

1. In the short-term perspectives, we aim to further enrich the integration of the Monaco editor with Langium. In this web integration, we envision the following:

    - User Project Management: This feature will enable users to generate, visualize, and manage their Jgen projects.

    - Advanced Export: The export button will be expanded to include advanced options. In addition to downloading the current Jgen project code, users will be able to choose from various file formats, such as Jgen, JSON, or Ecore. This flexibility will facilitate seamless integration with other tools and platforms.

    - File Import: Users will also have the ability to directly import Jgen, JSON, or Ecore files into the editor. This will open the door to simplified collaboration, allowing users to share and import Jgen projects with their colleagues and partners.

    - Version Management: A crucial aspect of project management is version control. We plan to implement version tracking functionality for each project, enabling users to revert to previous versions of the generated code, providing better control and traceability.

2. It would be interesting to generalize our DSL to incorporate more concepts related to REST API development.

3. Automation could be enhanced by integrating a synchronized diagram with our DSL, using tools such as Sprotty. This would enable a graphical visualization of entities and their relationships, offering a more intuitive understanding of the model.

## References

1. Documentation about the Langium framework is available at [https://langium.org/docs/](https://langium.org/docs/)
2. Vs Code Extension Guidelines is available at [https://code.visualstudio.com/api/ux-guidelines/overview](https://code.visualstudio.com/api/ux-guidelines/overview)
3. MDE course available at [https://portail.fil.univ-lille.fr/portail/index.php?dipl=MInfo&sem=GL&ue=IDM&label=Cours](https://portail.fil.univ-lille.fr/portail/index.php?dipl=MInfo&sem=GL&ue=IDM&label=Cours)

## Members

1. [OUHADI Yassine](https://github.com/YassineOuhadi)
2. [HOUSNI Badreddine](https://github.com/BADREDDINE1999)
3. [CHARIF Mehdi](https://github.com/mehdicharife)
4. [ALAMI IBN JAMAA Hamza](https://github.com/Schrodingdong)

## Supervisor

[M. MAHMOUD EL HAMLAOUI](https://github.com/ELHAMLAOUI)

## Report

[Project report](https://www.overleaf.com/read/vrphcpmjbhkk#2fca3f)
  
## License
