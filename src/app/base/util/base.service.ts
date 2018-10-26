import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MatSnackBar } from '@angular/material/snack-bar';

export class BaseService{

	protected headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
	
	constructor(public http: HttpClient, public snackBar: MatSnackBar){}

	get(url: string){
		return this
				.http
				.get(url)
				.map((response: any) => {
                	return response;
            	});
	}

	getFile(url: string){
		
		return this
				.http
				.get(url,{responseType: "blob"})
				.map((response: any) => {
                	return response;
            	});
	}

	post(url: string, body: any, headers?: HttpHeaders){
		let header = headers || this.headers;
		return this.http
				.post(url, body, {headers:header})
				.map((response: any) => {
                	return response;
            	});
	}

	put(url: string, body: any){
		return this
				.http
				.put(url, body)	
				.map((response: any) => {
                	return response;
            	});
	}

	delete(url: string){
		return this
				.http
				.delete(url)
				.map((response:any) => {
					return response;
				});
	}

	showLoader() {
    document.getElementById("outer-container").classList.add("loading");
  }

	hideLoader() {
    document.getElementById("outer-container").classList.remove("loading");
	}
	
	showSuccess(successText:string) {
		this.snackBar.open(successText, '', {
			duration: 3000,
			panelClass: ['success-snackbar']
		});
	}
	
	showError(errorText:string) {
		this.snackBar.open(errorText, '', {
			duration: 3000,
			panelClass: ['error-snackbar']
		});
	}
}