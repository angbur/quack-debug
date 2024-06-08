import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "quackdebug" is now active!');

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"quackdebug-sidebar",
			sidebarProvider
		)
	);

	const disposable = vscode.commands.registerCommand('quackdebug.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}  