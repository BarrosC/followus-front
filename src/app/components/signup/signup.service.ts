import { environment } from './../../../environments/environment';
import { BaseService } from './../../base/util/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '../../../../node_modules/@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  criarUsuario(user) {
    return this.post(environment.baseUrl + "/Users", user);
  }

  criarPessoa(pessoa) {
    return this.post(environment.baseUrl + "/Pessoas", pessoa);
  }
}
