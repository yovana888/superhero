import { Component, OnInit } from '@angular/core';
import { SuperHeroI, MarvelDataI } from 'src/app/commons/services/api/home/superhero/superhero-model.interface';
import { SuperHeroApiService } from 'src/app/commons/services/api/home/superhero/superhero-api.service';
import { PageEvent } from '@angular/material/paginator';
import { NgToastService } from 'ng-angular-popup';

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

	constructor(private _homeApiService: SuperHeroApiService, private _toast: NgToastService) {}

	ngOnInit(): void {
		this.getAllCharacters();
	}

	getAllCharacters(size: number = 10, indexPage: number = 0): void {
		this._homeApiService.getAllHeros(size, indexPage).subscribe({
			next: (response) => {
				this.listCharacters = response.data.results;
				this.pageLength = response.data.total;
				this.pageSize = response.data.limit;
			},
			error: (e) => {
				this._toast.error({ detail: 'Error', summary: e, duration: 6000 });
			}
		});
	}

	onChangePaginate(event: PageEvent): void {
		this.getAllCharacters(event.pageSize, event.pageIndex);
	}
}
