import chalk from 'chalk';
import { Command } from 'commander';
import { Project } from '../language-server/generated/ast';
import { JgenLanguageMetaData } from '../language-server/generated/module';
import { createJgenServices } from '../language-server/jgen-module';
import { extractAstNode } from './cli-util';
import { generateEcore } from '../generators/EcoreGenerator';
import { generateJson } from '../generators/JsonGenerator';
import { generateJgen } from '../generators/JgenGenerator';
import { NodeFileSystem } from 'langium/node';
import { generateRestfulAPI } from '../generators/RestfulAPIGenerator';
import fs from 'fs';
import path from 'path';

export const generateEcoreAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    const model = await extractAstNode<Project>(fileName, services);
    const generatedFilePath = generateEcore(model, fileName, opts.destination);
    console.log(chalk.green(`Ecore code generated successfully: ${generatedFilePath}`));
};

export const generateJsonAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    const model = await extractAstNode<Project>(fileName, services);
    const generatedFilePath = generateJson(model, fileName, opts.destination);
    console.log(chalk.green(`Json code generated successfully: ${generatedFilePath}`));
};

export const generateJgenAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    const generatedFilePath = generateJgen(fileName, opts.destination);
    console.log(chalk.green(`Json code generated successfully: ${generatedFilePath}`));
};

export const validateGrammarAction = async (fileName: string): Promise<void> => {
    //
};

export const generateRestfulAPIAction = async (opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    let filePath;
    
    // Check if either content or path is provided
    if (opts.content && opts.path) {
        console.error('Only one of -c or -p can be provided, not both.');
        process.exit(1);
    } else if (opts.content) {
        let fileName = `${extractProjectName(opts.content)}.jgen`;
        filePath = path.join(path.join(process.cwd(), 'example'), fileName);
        fs.writeFileSync(filePath, opts.content);

        // console.log("This is file content", opts.content);
        // process.exit(1);
    } else if (opts.path) {
        filePath = opts.path;
    } else {
        console.error(chalk.red('Please provide either a file path or content.'));
        process.exit(1);
    }

    const model = await extractAstNode<Project>(filePath, services);
    const generatedFilePath = generateRestfulAPI(model, filePath, opts.destination);
    console.log(chalk.green(`Restful api code generated successfully: ${generatedFilePath}`));
};

export type GenerateOptions = {
    destination?: string;
    content?: string;
    path?: string;
};

export default function (): void {
    const program = new Command();

    program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        .version(require('../../package.json').version);

    const fileExtensions = JgenLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generateEcore')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates Ecore from Jgen code')
        .action(generateEcoreAction);
    program
        .command('generateJson')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates Json from Jgen code')
        .action(generateJsonAction);
    program
        .command('generateJgen')
        .argument('<file>', `source file (possible file Json or Ecore)`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates Jgen from Json/Ecore code')
        .action(generateJgenAction);
    program
        .command('validateGrammar')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .description('validate grammar for a given Jgen code')
        .action(validateGrammarAction);
    program
    .command('generateRESTfulAPI')
    .option('-d, --destination <dir>', 'destination directory of generating')
    .option('-c, --content <content>', 'jgen content directly')
    .option('-p, --path <file>', 'source file (possible file extensions: ${fileExtensions})')
    .description('generates Restful API from Jgen code')
    .action(generateRestfulAPIAction)
    .on('--help', () => {
        console.log('');
        console.log('Examples:');
        console.log('');
        console.log('  To generate code for a given DSL file with a specified destination from file path:');
        console.log('    $ ./bin/cli generateRESTfulAPI -d <destination-path> -p <file>');
        console.log('');
        console.log('  To generate code for a given DSL file with a specified destination from direct content:');
        console.log('    $ ./bin/cli generateRESTfulAPI -d <destination-path> -c "<jgen-content>"');
        console.log('');
        console.log('Replace <destination-path> with the desired directory path where you want to store the generated code.');
    });

    program.parse(process.argv);
}

function extractProjectName(content : string) {
    const projectNameRegex = /project\s+([^\s]+)/;
    const match = content.match(projectNameRegex);
    return match ? match[1] : null;
}