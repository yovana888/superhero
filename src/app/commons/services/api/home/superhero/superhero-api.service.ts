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

	getAllHeros(limit: number = 10, pageIndex: number = 0, nameStartsWith: string = ''): Observable<RequestMarvelHeroI> {
		const objParams =
			nameStartsWith === ''
				? {
						params: new HttpParams()
							.set('limit', limit)
							.set('offset', limit * pageIndex)
							.set('apikey', this.apiKey)
				  }
				: {
						params: new HttpParams()
							.set('limit', limit)
							.set('offset', limit * pageIndex)
							.set('nameStartsWith', nameStartsWith)
							.set('apikey', this.apiKey)
				  };
		return this._httpClient.get<RequestMarvelHeroI>(this.apiUrl, objParams);
	}

	getHerobyID(id: number): Observable<RequestMarvelHeroI> {
		const url = `${this.apiUrl} / ${id} `;
		return this._httpClient.get<RequestMarvelHeroI>(url, {
			params: new HttpParams().set('apikey', this.apiKey)
		});
	}
}
