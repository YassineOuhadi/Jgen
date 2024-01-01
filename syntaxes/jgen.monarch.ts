// Monarch syntax highlighting for the jgen language.
export default {
    keywords: [
        'artifact','attribute','buildTool','configuration','controller','database','datasource','description','entity','enum','for','from','group','host','is','Jar','javaVersion','literal','metadata','method','name','nullable','operation','package','packaging','parameter','path','port','primaryKey','project','query','relationship','repository','requestBody','requestParameter','required','route','server','service','springVersion','to','type','unique','value','War'
    ],
    operators: [
        '.','11','17','2.7.17','2.7.18','21','3.0.12','3.0.13','3.1.5','3.1.6','3.2.0','8'
    ],
    symbols:  /\.|11|17|2\.7\.17|2\.7\.18|21|3\.0\.12|3\.0\.13|3\.1\.5|3\.1\.6|3\.2\.0|8/,

    tokenizer: {
        initial: [
            { regex: /SpringBootStarter|SpringDataJPA/, action: {"token":"string"} },
            { regex: /OneToOne|OneToMany|ManyToOne|ManyToMany/, action: {"token":"string"} },
            { regex: /Gradle|Maven/, action: {"token":"string"} },
            { regex: /Integer|Long|Float|String|Boolean/, action: {"token":"string"} },
            { regex: /POST|GET|PUT|PATCH|DELETE/, action: {"token":"string"} },
            { regex: /MySQL|Oracle|Mongodb|Maruadn/, action: {"token":"string"} },
            { regex: /INSERT|UPDATE|SELECT|DELETE/, action: {"token":"string"} },
            { regex: /[_a-zA-Z][\w_]*/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"ID"} }} },
            { regex: /"[^"]*"|'[^']*'/, action: {"token":"string"} },
            { regex: /[/][_a-zA-Z][\w_]*/, action: {"token":"string"} },
            { regex: /[0-9]+/, action: {"token":"number"} },
            { include: '@whitespace' },
            { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
        ],
        whitespace: [
            { regex: /\s+/, action: {"token":"white"} },
            { regex: /\/\*/, action: {"token":"comment","next":"@comment"} },
            { regex: /\/\/[^\n\r]*/, action: {"token":"comment"} },
        ],
        comment: [
            { regex: /[^\/\*]+/, action: {"token":"comment"} },
            { regex: /\*\//, action: {"token":"comment","next":"@pop"} },
            { regex: /[\/\*]/, action: {"token":"comment"} },
        ],
    }
};
