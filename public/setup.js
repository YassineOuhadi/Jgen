import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/jgen.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('jgen');

editorConfig.setMonarchTokensProvider(monarchSyntax);

editorConfig.setMainCode(`
project Demo

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
			type
			host
			port
			database

		server
			host
			port
            `);

editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

const workerURL = new URL('./jgen-server-worker.js', import.meta.url);
console.log(workerURL.href);

const lsWorker = new Worker(workerURL.href, {
	type: 'classic',
	name: 'Jgen Language Server'
});
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));
