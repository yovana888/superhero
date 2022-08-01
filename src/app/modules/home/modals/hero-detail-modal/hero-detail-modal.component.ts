import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroI } from 'src/app/commons/services/api/home/superhero/superhero-model.interface';

@Component({
	selector: 'app-hero-detail-modal',
	templateUrl: './hero-detail-modal.component.html',
	styleUrls: ['./hero-detail-modal.component.scss']
})
export class HeroDetailModalComponent implements OnInit {
	panelOpenState = false;
	linksInfo: any = [];
	urlImage: string = '';
	dataComics: any = [];
	dataStories: any = [];

	constructor(
		public dialogRef: MatDialogRef<HeroDetailModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data?: SuperHeroI
	) {}
	ngOnInit(): void {
		const path = this.data?.thumbnail.path;
		const extension = this.data?.thumbnail.extension;
		this.urlImage = !path ? 'assets/images/notimage.png' : path + '.' + extension;
		this.linksInfo = !this.data?.urls ? [] : this.data?.urls;
		this.dataStories = !this.data?.stories.items ? [] : this.data?.stories.items;
		this.dataComics = !this.data?.comics.items ? [] : this.data?.comics.items;
		console.log(this.dataComics, 'comic', this.dataStories, 'stor');
	}

	openLink(url: string | undefined): void {
		if (url) {
			window.open(url, '_blank');
		}
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}
