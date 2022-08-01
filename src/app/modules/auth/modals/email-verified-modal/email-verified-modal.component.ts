import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthApiService } from 'src/app/commons/services/api/auth/auth-api.service';
import { IDataModalVerifyEmail } from 'src/app/commons/services/api/auth/auth-model.interface';
@Component({
	selector: 'app-email-verified-modal',
	templateUrl: './email-verified-modal.component.html',
	styleUrls: ['./email-verified-modal.component.scss']
})
export class EmailVerifiedModalComponent implements OnInit {
	disableButton: boolean = false;
	constructor(
		private _authService: AuthApiService,
		private _toast: NgToastService,
		private _router: Router,
		public dialogRef: MatDialogRef<EmailVerifiedModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IDataModalVerifyEmail
	) {}

	ngOnInit(): void {
		console.log(this.data, 'veamos');
	}

	goHome(): void {
		this._router.navigateByUrl('/home');
		this._toast.info({ detail: 'Info', summary: 'Welcome :D', duration: 6000 });
	}
}
