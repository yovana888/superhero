import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
	providedIn: 'root'
})
export class SpinnerService {
	constructor(private _spinnerService: NgxSpinnerService) {}

	public callSpinner(): void {
		this._spinnerService.show();
	}

	public closeSpinner(): void {
		this._spinnerService.hide();
	}
}
