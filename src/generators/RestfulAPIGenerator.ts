import fs from 'fs';
import { CompositeGeneratorNode, NL, Reference, toString } from 'langium';
import path from 'path';
import { Entity, Attribute, Project } from '../language-server/generated/ast';
import { extractDestinationAndName } from '../cli/cli-util';

export function generateRestfulAPI(model: Project, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.ecore`;

    const fileNode = new CompositeGeneratorNode();

    fileNode.append("// ", NL);

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
    return generatedFilePath;
}