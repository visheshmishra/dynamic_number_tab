import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderService {
    constructor (private _http: Http ) {}
	getHeader(){
		return  new Promise<any[]>((resolve, reject) => { 
			this._http.get("assets/header.json").map(resp => resp.json())
			.subscribe(
			resp => {
			resolve(resp.headerList);
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	};
}
