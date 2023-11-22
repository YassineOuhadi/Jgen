import chalk from 'chalk';
import { Command } from 'commander';
import { Project } from '../language-server/generated/ast';
import { JgenLanguageMetaData } from '../language-server/generated/module';
import { createJgenServices } from '../language-server/jgen-module';
import { extractAstNode } from './cli-util';
import { generateEcore } from '../generators/EcoreGenerator';
import { NodeFileSystem } from 'langium/node';
import { generateRestfulAPI } from '../generators/RestfulAPIGenerator';
// import { generateLangium } from '../generators/LangiumGenerator';

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    const model = await extractAstNode<Project>(fileName, services);
    const generatedFilePath = generateEcore(model, fileName, opts.destination);
    console.log(chalk.green(`Ecore code generated successfully: ${generatedFilePath}`));
};

export const generateRestfulAPIAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createJgenServices(NodeFileSystem).Jgen;
    const model = await extractAstNode<Project>(fileName, services);
    const generatedFilePath = generateRestfulAPI(model, fileName, opts.destination);
    console.log(chalk.green(`Restful api code generated successfully: ${generatedFilePath}`));
};
// export const generateAction2 = async (fileName: string, opts: GenerateOptions): Promise<void> => {
//     const services = createJgenServices(NodeFileSystem).Jgen;
//     const model = await extractAstNode<JSpringApp>(fileName, services);
//     // const generatedFilePath = generateLangium(model, fileName, opts.destination);
//     console.log(chalk.green(`Ecore code generated successfully: ${generatedFilePath}`));
// };

export type GenerateOptions = {
    destination?: string;
}

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
        .description('generates Ecore from jgen file')
        .action(generateAction);
    program
        .command('generateRESTfulAPI')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates Restful API from jgen file')
        .action(generateRestfulAPIAction);
    // program
    //     .command('generateLangium')
    //     .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
    //     .option('-d, --destination <dir>', 'destination directory of generating')
    //     .description('generates Langium from jgen file')
    //     .action(generateAction2);

    program.parse(process.argv);
}
