import { Component, OnInit } from '@angular/core';
import { SuperHeroI } from 'src/app/commons/services/api/home/superhero/superhero-model.interface';
import { SuperHeroApiService } from 'src/app/commons/services/api/home/superhero/superhero-api.service';
import { PageEvent } from '@angular/material/paginator';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { HeroDetailModalComponent } from '../../modals/hero-detail-modal/hero-detail-modal.component';

@Component({
	selector: 'app-superhero-page',
	templateUrl: './superhero-page.component.html',
	styleUrls: ['./superhero-page.component.scss']
})
export class SuperheroPageComponent implements OnInit {
	listCharacters: SuperHeroI[] = [];
	pageEvent!: PageEvent;
	pageSize: number = 10; // items x pagina
	pageLength: number = 0; // total items
	showNotFoundResult: boolean = false;
	valueSearchComponent?: string = '';

	constructor(
		private _homeApiService: SuperHeroApiService,
		private _toast: NgToastService,
		private _matDialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getAllCharacters();
	}

	getAllCharacters(size: number = 10, indexPage: number = 0): void {
		this._homeApiService.getAllHeros(size, indexPage, this.valueSearchComponent).subscribe({
			next: (response) => {
				this.listCharacters = response.data.results;
				this.pageLength = response.data.total;
				this.pageSize = response.data.limit;
				this.showNotFoundResult = response.data.count === 0 ? true : false;
			},
			error: (e) => {
				this._toast.error({
					detail: 'Error',
					summary: 'Apparently there was an error fetching the data',
					duration: 6000
				});
			}
		});
	}

	onChangePaginate(event: PageEvent): void {
		this.listCharacters = [];
		this.getAllCharacters(event.pageSize, event.pageIndex);
	}

	onSearch(valueSearch: string): void {
		this.listCharacters = [];
		this.valueSearchComponent = valueSearch;
		this.getAllCharacters();
	}

	onReload(): void {
		this.listCharacters = [];
		this.valueSearchComponent = '';
		this.showNotFoundResult = false;
		this.getAllCharacters();
	}

	openDialogHeroDetail(hero: SuperHeroI): void {
		if (screen.width < 500) {
			this._matDialog.open(HeroDetailModalComponent, {
				maxWidth: '100vw',
				width: '90%',
				maxHeight: '670px',
				data: hero
			});
		} else {
			this._matDialog.open(HeroDetailModalComponent, {
				width: '470px',
				maxHeight: '570px',
				data: hero
			});
		}
	}
}
