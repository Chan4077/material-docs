import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
	selector: 'table-of-contents',
	templateUrl: './table-of-contents.docs.html',
	styles: [`:host {
		font-size: 13px;
		width: 15%;
		position: sticky;
		position: -webkit-sticky;
		top: 0;
	}`]
})
export class DocsTOC implements OnInit {
	_rootUrl: string;
	links: TOCLink[] = [];
	headerLinks: NodeListOf<HTMLDivElement>;
	constructor(private router: Router, private domSanitizer: DomSanitizer) {
		router.events.subscribe(ev => {
			if (ev instanceof NavigationEnd) {
				this._rootUrl = this.router.url.split('#')[0];
			}
		})
	}
	ngOnInit() {
		this.headerLinks = <NodeListOf<HTMLDivElement>> document.querySelectorAll('div.docs-heading');
		for (var i = 0; i < this.headerLinks.length; i++) {
			if (this.headerLinks[i].id) {
				let tempVar = {} as TOCLink;
				tempVar['link'] = this.headerLinks[i].id;
				tempVar['name'] = this.domSanitizer.bypassSecurityTrustHtml(this.headerLinks[i].children[0].innerHTML);
				tempVar['type'] = this.headerLinks[i].children[0].localName;
				this.links.push(tempVar);
			}
		}
	}
}
export interface TOCLink {
	/**
	 * The type of header
	 * @type {string}
	 */
	type: 'h3' | 'h4' | string;
	/**
	 * The link to go to.
	 * @type {string}
	 */
	link: string;
	/**
	 * The name of the header
	 * @type {SafeHtml}
	 */
	name: SafeHtml;
}