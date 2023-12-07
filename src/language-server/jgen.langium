grammar Jgen

entry Project:
    'project' name=ID
    (structuralComponents+=StructuralComponent )*
    configuration=Configuration ;

Entity:
    'entity' name=ID
    (attributes+=Attribute)*;

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
    (literals+=Literal)*;

Literal:
    'literal' name=ID 'value' value=ID;
    
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