import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/jgen.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');
const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('jgen');

editorConfig.setMonarchTokensProvider(monarchSyntax);

const exportButton = document.getElementById('exportButton');
let jgenCode = `
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
            `;

editorConfig.setMainCode(jgenCode);

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


// get the language client
const c = client.getLanguageClient();
if (!c) throw new Error('Unable to obtain language client!');

// listen for document change notifications
c.onNotification('browser/DocumentChange', onDocumentChange);
c.onNotification('browser/InvalidChange', invalidChange);

// onDocumentChange function
function onDocumentChange(resp) {
    // console.log(resp.content);
    // Check if content is not empty
    if (resp.content.trim() !== '') {
		jgenCode = resp.content;
        exportButton.style.display = 'block';
    } else {
		jgenCode = '';
        exportButton.style.display = 'none';
    }
}

// invalidChange function
function invalidChange(resp) {
    console.log(resp.content);
    jgenCode = '';
    exportButton.style.display = 'none';
}

// Event listener for the export button
exportButton.addEventListener('click', function () {
    if (jgenCode.trim() !== '') {
        const blob = new Blob([jgenCode], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${extractProjectName(jgenCode)}.jgen`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error('No content to export.');
    }
});

function extractProjectName(code) {
    const projectRegex = /project\s+(\w+)/;
    const match = code.match(projectRegex);
    if (match && match[1]) {
        return match[1];
    } else {
        console.error('Project name not found in the code.');
        return null;
    }
}