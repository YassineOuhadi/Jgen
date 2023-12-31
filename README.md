# Welcome to Jgen VS Code Extension

<img src='https://github.com/YassineOuhadi/Jgen/assets/109771302/6ef3ebd1-56f2-4175-802b-60179011fd50' width='80'>

## Introduction

Language Server Protocol is an open-source protocol for language services developed by Microsoft. It enables code editors and IDEs to communicate with external language services to provide features such as syntax highlighting, code completion, code navigation, code checking, code modification.

Langium is a tool for linguistic engineering that supports the Language Server protocol and is open-source, is similar to the Xtext grammar. It is written in TypeScript and works under Node.js. Langium can be used for various tasks such as code analysis, code generation, and auto-completion.

Jgen, the DSL, is constructed on the Spring Boot REST API Ecore metamodel, developed using Langium. Additionally, a CLI is implemented to generate code from DSL, facilitating transformation M2M between Ecore and Jgen metamodels, as well as transformation M2T when generating Spring Boot RESTful APIs.

The VS Code extension for the Jgen DSL allows the implementation of code validations, code completion, syntax highlighting, and a server protocol language. It features a tree view that synchronizes with the Jgen editor.

## Features

1. Domain specific language using Langium.
2. Semantic validators for our DSL based on TypeScript code.
3. CLI for our DSL.
4. Parser for Jgen DSL that outputs JSON format.
5. Transformation M2M between Ecore model and Jgen DSL.
6. Generate Java RESTful APIs from Jgen DSL.
7. Building an Extension.
   - Open Jgen file.
   - Initialize Jgen file.
   - Tree view for Extension
9. Generation in the Web.
10. Graphical model for Jgen DSL.

## DSL for Generating Spring Boot REST APIs using Langium

### Jgen Grammar

```
grammar Jgen

entry Project:
    'project' name=ID
    (structuralComponents+=StructuralComponent )*
    configuration=Configuration ;

Entity:
    'entity' name=ID
    (attributes+=Attribute)+;

Attribute:
    'attribute' name=ID 'type' (enumType=[Enum] | type=DATATYPE) (nullable?='nullable')? (primaryKey?='primaryKey')?;

StructuralComponent:
    Enum | Entity | Relationship | Repository | Controller | Service;

Repository:
    'repository' name=ID 'for' entity=[Entity:ID]
    (queries+=Query)*;

Service:
    'service' name=ID 'for' entity=[Entity:ID] 
        'repository' repository=[Repository:ID] &
        (methods+=Method)+;

Controller:
    'controller' name=ID 'for' entity=[Entity:ID]
        'path' name=PATH &
        'service' service=[Service:ID] &
        (routes+=Route)+;

Route:
    'route' name=ID
        path=Path
        operation=Operation
        (requestBody=RequestBody | (requestParameters+=RequestParameter)*);

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

Relationship:
    'relationship' type=RELATIONSHIP 'from' from=[Entity:ID] 'to' to=[Entity:ID];

Method:
    'method' name=ID (
    (parameters+=Parameter)*)?;

Query:
    'query' name=ID (
    ('type' type=QUERY_TYPE)?
    (parameters+=Parameter)*)?;

Enum:
    'enum' name=ID
    (literals+=Literal)+;

Literal:
    'literal' name=ID ('value' value=ID)?;
    
Configuration:
    'configuration'
        Metadata &
        Datasource &
        Server;

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

### Instance content Example

```
project Demo

   enum Roles
      literal ADMIN value admin
      literal USER value user

   entity User
      attribute id type Long primaryKey
      attribute username type String
      attribute email type String
      attribute role type Roles

   entity Tweet
      attribute id type Long primaryKey
      attribute content type String
      attribute tags type String nullable

   relationship OneToMany from User to Tweet

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
		
		
```

## Visual Studio Code extension

![mde drawio](https://github.com/YassineOuhadi/Jgen/assets/109771302/f3fc8b8f-aa45-4135-803f-72bfcc039156)

## Get started

 * Run `npm run langium:generate` to generate TypeScript code from the grammar definition.
 * Run `npm run build` to compile all TypeScript code.
 * Press `F5` to open a new window with the Jgen extension loaded.
 * Create a new file with a file name suffix `.jgen`.
 * Verify that syntax highlighting, validation, completion, etc. are working as expected.
 * Run `./bin/cli` to see options for the CLI; `./bin/cli generate <file>` generates code for a given DSL file.
  * To generate REST code for a given DSL file with a specified destination, use the following command: 
    - `./bin/cli generateRESTfulAPI --help` to see options and help for the `generateRESTfulAPI` command.
    - `./bin/cli generateRESTfulAPI -d <destination-path> -p <file>` for file path or `./bin/cli generateRESTfulAPI -d <destination-path> -c "<jgen-content>"` for direct content. Replace `<destination-path>` with the desired directory path where you want to store the generated code.

## Get started with the Docker image

* To generate code for a given DSL file with a specified destination using the Docker image:

    * Pull the Docker image from Docker Hub:
    ```
    docker pull yassineouhadi/jgen:jgen
    ```

    * Run the Docker image, specifying the `-v` volume option to set the output path:

    ```
    docker run -it -v <destination-path>:/jgen/generated yassineouhadi/jgen:jgen generateRESTfulAPI -c <content>
    ```
    You can use `"$(cat ./path/to/file)"` to pass the content of a local file as input.

## Overview

## Perspectives

- Regarding the perspectives, we plan to create a graphical model synchronized with our DSL. We're not sure to use Sprotty or Sirius Web.

## References

1. Documentation about the Langium framework is available at [https://langium.org/docs/](https://langium.org/docs/)
2. Vs Code Extension Guidelines is available at [https://code.visualstudio.com/api/ux-guidelines/overview](https://code.visualstudio.com/api/ux-guidelines/overview)

## Members

1. [OUHADI Yassine](https://github.com/YassineOuhadi)
2. [HOUSNI Badreddine](https://github.com/BADREDDINE1999)
3. [CHARIF Mehdi](https://github.com/mehdicharife)
4. [ALAMI IBN JAMAA Hamza](https://github.com/Schrodingdong)
  
## License
