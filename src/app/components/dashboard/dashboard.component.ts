import { EventosService } from './../eventos/eventos.service';
import { EventosDetalheDialogComponent } from './../eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component';
import { EventoVO } from './../../base/vo/evento';
import { NoticiasDetalheDialogComponent } from './../noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component';
import { NoticiasService } from './../noticias/noticias.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NoticiaVO } from '../../base/vo/noticia';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public noticias: Array<NoticiaVO> = [];
  public eventos: Array<EventoVO> = [];
  public meusEventos: Array<EventoVO> = [];

  constructor(
    private dialog: MatDialog,
    private noticiasService: NoticiasService,
    private eventosService: EventosService) { }

  ngOnInit() {  
    this.recuperarNoticias(); 
    this.recuperarEventos(); 
  }

  recuperarNoticias() {
    this.noticiasService.recuperarNoticias().subscribe(response => {
      this.noticias = response;      
    },
    error => {
      this.noticiasService.hideLoader();
      this.noticiasService.showError("Erro ao recuperar notícias");
    });
  }

  recuperarEventos() {
    this.eventosService.recuperarEventos().subscribe(response => {
      this.eventos = response;
      this.getMyEvents();
    },
    error => {
      this.eventosService.hideLoader();
      this.eventosService.showError("Erro ao recuperar eventos");
    });
  }

  detalheNoticiaDialog(noticia: String) {
    this.dialog.open(NoticiasDetalheDialogComponent, {
      data: noticia,
      disableClose: true
    });
  }

  detalheEventoDialog(evento: EventoVO) {
    this.dialog.open(EventosDetalheDialogComponent, {
      data: evento,
      disableClose: true
    });
  }

  validateDate(evento: EventoVO) {
    let eventDate = new Date(evento.dataEvento);
    return eventDate > new Date();
  }

  getMyEvents() {
    const curPersonId = JSON.parse(localStorage.getItem('currentPerson')).id;
    this.meusEventos = [];

    this.eventos.forEach(evento => {
      evento.participantes.forEach(participante => {
        if(participante.personId === curPersonId) {
          this.meusEventos.push(evento);
        }
      });
    });
  }

  meusEventosConcluidos() {
    let count = 0;

    this.meusEventos.forEach(evento => {
      if(!this.validateDate(evento)) {
        count ++;
      }
    });

    return count;
  }

  distanciaTotalPercorrida() {
    let distanciaTotal = 0;

    this.meusEventos.forEach(evento => {
      if(!this.validateDate(evento)) {
        distanciaTotal = distanciaTotal + evento.distancia;
      }
    });

    return distanciaTotal;
  }

}
