import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailModalComponent } from './hero-detail-modal.component';

describe('HeroDetailModalComponent', () => {
	let component: HeroDetailModalComponent;
	let fixture: ComponentFixture<HeroDetailModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeroDetailModalComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(HeroDetailModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
