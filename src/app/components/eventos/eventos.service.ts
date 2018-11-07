import { environment } from './../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../base/util/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  recuperarEventos() {
    return this.get(environment.baseUrl + '/Eventos');
  }

  novoEvento(evento) {
    return this.post(environment.baseUrl + "/Eventos", evento);
  }

  alterarEvento(evento) {
    return this.put(environment.baseUrl + "/Eventos", evento);
  }

  removerEvento(eventoId) {
    return this.delete(environment.baseUrl + "/Eventos/" + eventoId);
  }
}
