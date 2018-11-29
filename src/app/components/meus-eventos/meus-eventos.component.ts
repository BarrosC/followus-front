import { MeusEventosRemoverDialogComponent } from './meus-eventos-remover-dialog/meus-eventos-remover-dialog.component';
import { MeusEventosDialogComponent } from './meus-eventos-dialog/meus-eventos-dialog.component';
import { EventosDetalheDialogComponent } from './../eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component';
import { MatDialog } from '@angular/material';
import { MeusEventosService } from './meus-eventos.service';
import { EventoVO } from './../../base/vo/evento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.component.html',
  styleUrls: ['./meus-eventos.component.css']
})
export class MeusEventosComponent implements OnInit {

  public eventos: Array<EventoVO>;

  constructor(private dialog: MatDialog, private meusEventosService: MeusEventosService) { }

  ngOnInit() {
    this.recuperarEventos();
  }

  recuperarEventos() {
    this.meusEventosService.recuperarEventos().subscribe(response => {
      this.eventos = response;
    },
    error => {
      this.meusEventosService.hideLoader();
      this.meusEventosService.showError("Erro ao recuperar eventos");
    });
  }

  detalheEventoDialog(evento: EventoVO) {
    this.dialog.open(EventosDetalheDialogComponent, {
      data: evento,
      disableClose: true
    });
  }

  openDialog(evento: EventoVO) {

    const dialogRef = this.dialog.open(MeusEventosDialogComponent, {
      data: evento,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recuperarEventos();
    });
  }

  removerEventoDialog(evento: EventoVO) {
    const dialogRef = this.dialog.open(MeusEventosRemoverDialogComponent, {
      data: evento,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recuperarEventos();
    });
  }

}
