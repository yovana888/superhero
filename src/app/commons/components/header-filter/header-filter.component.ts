import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, tap, takeUntil } from 'rxjs/operators';
import { AuthApiService } from '../../services/api/auth/auth-api.service';

@Component({
	selector: 'app-header-filter',
	templateUrl: './header-filter.component.html',
	styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnDestroy, OnInit {
	@Output() search = new EventEmitter<string>();
	@Output() reload = new EventEmitter<string>();

	constructor(private _authService: AuthApiService, private _toast: NgToastService) {
		this.onSearch();
	}

	searchByOption1: boolean = true;
	valueSearch = new FormControl('');
	nameUser: string = '';
	photoUser: string = '';
	private destroy$ = new Subject<unknown>();

	ngOnInit(): void {
		this._authService.getInfoUser().subscribe({
			next: (res) => {
				this.nameUser = !res?.displayName ? 'My Account' : res?.displayName;
				this.photoUser = !res?.photoURL ? '' : res?.photoURL;
			},
			error: (e) => this._toast.error({ detail: 'Error', summary: e.code, duration: 6000 })
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next({});
		this.destroy$.complete();
	}

	cleanSearch(): void {
		this.valueSearch.reset();
		this.reload.emit();
	}

	private onSearch(): void {
		this.valueSearch.valueChanges
			.pipe(
				map((search) => search?.toLowerCase().trim()),
				debounceTime(300),
				distinctUntilChanged(),
				filter((search) => search !== '' && search !== undefined && search?.length > 2),
				tap((search) => this.search.emit(search)),
				takeUntil(this.destroy$)
			)
			.subscribe();
	}
}
