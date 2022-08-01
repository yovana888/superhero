import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestMarvelHeroI } from './superhero-model.interface';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
/**
   @limit total de items por pagina
   @pageIndex num  pagina
 */
export class SuperHeroApiService {
	private apiUrl: string = '';
	private apiKey: string = '';
	public characters: string = 'characters';

	constructor(private _httpClient: HttpClient) {
		this.apiUrl = environment.apiUrl + this.characters;
		this.apiKey = environment.apiKey;
	}

	getAllHeros(limit: number = 10, pageIndex: number = 0): Observable<RequestMarvelHeroI> {
		return this._httpClient.get<RequestMarvelHeroI>(this.apiUrl, {
			params: new HttpParams()
				.set('limit', limit)
				.set('offset', limit * pageIndex)
				.set('apikey', this.apiKey)
		});
	}

	getHerobyID(id: number): Observable<RequestMarvelHeroI> {
		const url = `${this.apiUrl} / ${id} `;
		return this._httpClient.get<RequestMarvelHeroI>(url, {
			params: new HttpParams().set('apikey', this.apiKey)
		});
	}
}
