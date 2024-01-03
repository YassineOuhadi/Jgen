import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import {DedicatedWorkerGlobalScope} from 'typescript/lib/lib.webworker';
import { createJgenServices } from './jgen-module';

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared } = createJgenServices({ connection, ...EmptyFileSystem });

startLanguageServer(shared);
