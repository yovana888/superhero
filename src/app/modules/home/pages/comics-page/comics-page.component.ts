import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-comics-page',
	templateUrl: './comics-page.component.html',
	styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		console.log('comics');
	}
}
