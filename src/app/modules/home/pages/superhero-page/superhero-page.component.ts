import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-superhero-page',
	templateUrl: './superhero-page.component.html',
	styleUrls: ['./superhero-page.component.scss']
})
export class SuperheroPageComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		console.log('gallery');
	}
}
