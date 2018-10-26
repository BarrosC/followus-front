import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../base/util/base.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasAdminService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  recuperarNoticias() {
    return this.get(environment.baseUrl + '/Noticias');
  }

  novaNoticia(noticia) {
    return this.post(environment.baseUrl + "/Noticias", noticia);
  }

  alterarNoticia(noticia) {
    return this.put(environment.baseUrl + "/Noticias", noticia);
  }

  removerNoticia(noticiaId) {
    return this.delete(environment.baseUrl + "/Noticias/" + noticiaId);
  }
}
