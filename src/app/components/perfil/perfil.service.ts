import { environment } from './../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../base/util/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  recuperarPessoa() {
    const curUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    const query = JSON.stringify({"where": {"userId": {"like":curUserId}}});
    return this.get(environment.baseUrl + '/Pessoas/findOne?filter=' + query);
  }

  atualizarPessoa(pessoa) {
    return this.put(environment.baseUrl + "/Pessoas", pessoa);
  }
}
