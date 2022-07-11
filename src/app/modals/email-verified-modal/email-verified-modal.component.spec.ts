import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedModalComponent } from './email-verified-modal.component';

describe('EmailVerifiedModalComponent', () => {
	let component: EmailVerifiedModalComponent;
	let fixture: ComponentFixture<EmailVerifiedModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EmailVerifiedModalComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(EmailVerifiedModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
