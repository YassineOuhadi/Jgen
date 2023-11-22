### DSL for Generating Spring Boot REST APIs

## Introduction

- Language Server Protocol is an open-source protocol for language services developed by Microsoft. It enables code editors and IDEs to communicate with external language services to provide features such as syntax highlighting, code completion, code navigation, code checking, code modification.

- Langium is a tool for linguistic engineering that supports the Language Server protocol and is open-source. It is written in TypeScript and works under Node.js. Langium can be used for various tasks such as code analysis, code generation, and auto-completion. The Language Server protocol is an open protocol that allows different code editors and integrated development environments to integrate with code analysis and debugging tools, such as Langium.

## JGEN Extension

- Create our domain specific language using Langium, which is similar to the Xtext grammar. Define the entry for our DSL, terminus, and non-terminals.
- Create syntactic and semantic validators for our DSL based on TypeScript code.
- Create a CLI for our DSL.
- Create a parser for our DSL that outputs JSON format.
- Transformation M2M between Ecore code and our DSL.
- Generate Java RESTful APIs from our DSL.
- Create an extension in VS Code.
- Create a tree view for our extension.
- Have the ability to open Jgen files.
- Initialize Jgen files.
- Generation in the Web ?
- Graphical model for our DSL, either using Sprotty or Sirius Web ?

![Jgen-code](https://github.com/YassineOuhadi/Jgen/assets/109771302/6ef3ebd1-56f2-4175-802b-60179011fd50)


Jgen Grammar
-------------

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

Instance content
-------------

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

Cli tools
-------------

![Screenshot from 2023-11-20 22-47-27](https://github.com/YassineOuhadi/Jgen/assets/109771302/623865bd-eac0-4dde-93b3-4322b8f9af2c)

Extension treeview
-------------

![Screenshot from 2023-11-20 23-25-32](https://github.com/YassineOuhadi/Jgen/assets/109771302/744b7827-98e4-4104-b0dc-e7ec60d23ce0)

-------------

![Screenshot from 2023-11-20 22-52-07](https://github.com/YassineOuhadi/Jgen/assets/109771302/deb639c3-1557-4b6b-b945-f3086f0f0fd0)

Conclusion
-------------

- We will work on generating RESTful APIs and provide more details about the project. 

- Regarding the perspectives, we plan to create a graphical model synchronized with our DSL. We're not sure to use Sprotty or Sirius Web.

Members
-------------

- Yassine Ouhadi
- HOUSSNI Badreddine
- ALAMI IBN JAMAA Hamza
- CHARIF Mehdi