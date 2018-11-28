import { EventosSairDialogComponent } from './eventos-sair-dialog/eventos-sair-dialog.component';
import { AuthService } from './../../base/util/auth.service';
import { PessoaVO } from './../../base/vo/pessoa';
import { EventosParticiparDialogComponent } from './eventos-participar-dialog/eventos-participar-dialog.component';
import { EventosDetalheDialogComponent } from './eventos-detalhe-dialog/eventos-detalhe-dialog.component';
import { EventoVO } from './../../base/vo/evento';
import { EventosService } from './eventos.service';
import { EventosNovoDialogComponent } from './eventos-novo-dialog/eventos-novo-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public eventos: Array<EventoVO>;

  constructor(private dialog: MatDialog, private eventosService: EventosService, private authService: AuthService) { }

  ngOnInit() {
    this.recuperarEventos();
  }

  recuperarEventos() {
    this.eventosService.recuperarEventos().subscribe(response => {
      this.eventos = response;
    },
    error => {
      this.eventosService.hideLoader();
      this.eventosService.showError("Erro ao recuperar eventos");
    });
  }

  openDialog(noticia) {
    if(!noticia) {
      noticia = null;
    }

    const dialogRef = this.dialog.open(EventosNovoDialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recuperarEventos();
    });
  }

  detalheEventoDialog(evento: EventoVO) {
    this.dialog.open(EventosDetalheDialogComponent, {
      data: evento,
      disableClose: true
    });
  }

  estouParticipando(evento: EventoVO) {

    let participandoControl: boolean = false;
    const pessoa: PessoaVO = this.authService.getLoggedPerson();

    evento.participantes.forEach(participante => {
      if (participante.personId === pessoa.id) {
        participandoControl = true;
      }
    });    

    return participandoControl;
  }

  participarEventoDialog(evento: EventoVO) {
    this.dialog.open(EventosParticiparDialogComponent, {
      data: evento,
      disableClose: true
    });
  }

  sairEventoDialog(evento: EventoVO) {
    this.dialog.open(EventosSairDialogComponent, {
      data: evento,
      disableClose: true
    });
  }

  validateDate(evento: EventoVO) {
    let eventDate = new Date(evento.dataEvento);
    return eventDate > new Date();
  }

}
