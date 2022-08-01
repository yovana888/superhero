import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-notfound-page',
	templateUrl: './notfound-page.component.html',
	styleUrls: ['./notfound-page.component.scss']
})
export class NotfoundPageComponent implements OnInit {
	constructor(private _router: Router) {}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {}

	goBack(): void {
		this._router.navigateByUrl('/home');
	}
}
