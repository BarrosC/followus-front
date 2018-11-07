import { MeusEventosService } from './../meus-eventos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventoVO } from './../../../base/vo/evento';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-meus-eventos-remover-dialog',
  templateUrl: './meus-eventos-remover-dialog.component.html',
  styleUrls: ['./meus-eventos-remover-dialog.component.css']
})
export class MeusEventosRemoverDialogComponent implements OnInit {

  public evento: EventoVO;

  constructor(public dialogRef: MatDialogRef<MeusEventosRemoverDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: EventoVO, private meusEventosService: MeusEventosService) { }

  ngOnInit() {    
    this.evento = this.data;
  }

  removerEvento() {
    this.meusEventosService.removerEvento(this.evento.id).subscribe(response => {
      this.meusEventosService.showSuccess("Evento removido com sucesso!");
      this.dialogRef.close();
    },
    error => {
      this.meusEventosService.hideLoader();
      this.meusEventosService.showError("Erro ao remover evento");
    });
  }

}
