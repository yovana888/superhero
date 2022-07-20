import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDataModalVerifyEmail } from 'src/app/commons/services/api/auth/auth-model.interface';
@Component({
	selector: 'app-email-verified-modal',
	templateUrl: './email-verified-modal.component.html',
	styleUrls: ['./email-verified-modal.component.scss']
})
export class EmailVerifiedModalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<EmailVerifiedModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IDataModalVerifyEmail
	) {}

	ngOnInit(): void {
		console.log(this.data, 'veamos');
	}
	clickNo(): void {
		console.log('no: cerramos');
		this.dialogRef.close();
	}

	clickSi(): void {
		console.log('siiii');
	}
}
