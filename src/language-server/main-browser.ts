import { DocumentState, EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, Command, Diagnostic, NotificationType, createConnection } from 'vscode-languageserver/browser.js';
import { createJgenServices } from './jgen-module';
import { Project } from './generated/ast';
import { parseJSONToJgenFormat, parseProjectToJgenNode } from '../parser';

declare const self: DedicatedWorkerGlobalScope;

/* browser specific setup code */
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

// Inject the shared services and language-specific services
const { shared, Jgen } = createJgenServices({ connection, ...EmptyFileSystem });

// Start the language server with the shared services
startLanguageServer(shared);

// Send a notification with the serialized AST after every document change
type DocumentChange = { uri: string, content: string, diagnostics: Diagnostic[] };
const documentChangeNotification = new NotificationType<DocumentChange>('browser/DocumentChange');
const invalidChangeNotification = new NotificationType<DocumentChange>('browser/InvalidChange');
// use the built-in AST serializer
const jsonSerializer = Jgen.serializer.JsonSerializer;
// listen on fully validated documents
shared.workspace.DocumentBuilder.onBuildPhase(DocumentState.Validated, documents => {
    // perform this for every validated document in this build phase batch
    for (const document of documents) {
        const project = document.parseResult.value as Project;

         // only generate commands if there are no errors
         if(document.diagnostics === undefined 
            || document.diagnostics.filter((i) => i.severity === 1).length === 0
            ) {
                connection.sendNotification(documentChangeNotification, {
                    uri: document.uri.toString(),
                    content: parseJSONToJgenFormat(parseProjectToJgenNode(project)),
                    diagnostics: document.diagnostics ?? []
                });
        } else {
            connection.sendNotification(invalidChangeNotification, {
                uri: document.uri.toString(),
                content: "Invalide Changes",
                diagnostics: document.diagnostics ?? []
            });
        }
        
    }
});