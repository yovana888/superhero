import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/spinner/spinner.service';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	constructor(private _loaderService: LoaderService) {}
	isLoading: Subject<boolean> = this._loaderService.isLoading;
}
