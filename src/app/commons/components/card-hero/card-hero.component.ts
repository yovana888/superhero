import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHeroI } from '../../services/api/home/superhero/superhero-model.interface';

@Component({
	selector: 'app-card-hero',
	templateUrl: './card-hero.component.html',
	styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {
	@Input() hero?: SuperHeroI;
	@Output() clickCardHero = new EventEmitter<SuperHeroI>();
	constructor() {}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {}

	clickCard(hero: SuperHeroI): void {
		this.clickCardHero.emit(hero);
	}
}
