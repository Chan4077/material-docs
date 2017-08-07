import { IconMenuComponent } from './../../../../assets/examples/menu/icon-menu';
import { NestedMenuComponent } from './../../../../assets/examples/menu/nested-menu';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles, CodeExternalComponent } from './../../../shared/example-viewer.component';
import { Component, OnInit } from "@angular/core";

@Component({
	selector: 'docs-menu-example',
	templateUrl: './examplemenu.component.html'
})
export class DocsExampleMenu implements OnInit {
	nestedMenu: CodeFiles;
	iconMenu: CodeFiles;
	iconMenuExt: CodeExternalComponent[];
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Menu > Examples") }
	ngOnInit() {
		this.iconMenuExt = [
			{
				link: "/components/dialog",
				name: "Dialog"
			}
		]
		this.nestedMenu = {
			filePath: [
				'assets/examples/menu/nested-menu.html',
				'assets/examples/menu/nested-menu.ts'
			],
			highlightPath: [
				'assets/highlighted/nested-menu-html.html',
				'assets/highlighted/nested-menu-ts.html'
			],
			componentName: NestedMenuComponent
		}
		this.iconMenu = {
			filePath: [
				'assets/examples/menu/icon-menu.html',
				'assets/examples/menu/icon-menu.ts'
			],
			highlightPath: [
				'assets/highlighted/icon-menu-html.html',
				'assets/highlighted/icon-menu-ts.html'
			],
			componentName: IconMenuComponent
		}
	}
}