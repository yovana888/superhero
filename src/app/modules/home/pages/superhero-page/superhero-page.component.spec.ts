import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroPageComponent } from './superhero-page.component';

describe('SuperheroPageComponent', () => {
	let component: SuperheroPageComponent;
	let fixture: ComponentFixture<SuperheroPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SuperheroPageComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SuperheroPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
