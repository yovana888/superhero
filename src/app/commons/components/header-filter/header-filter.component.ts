import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header-filter',
	templateUrl: './header-filter.component.html',
	styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit {
	constructor() {}
	searchByHero: boolean = true;
	valueSearch: string = '';
	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {}

	changeSearch(): void {
		this.searchByHero = !this.searchByHero;
		this.valueSearch = '';
	}
}
