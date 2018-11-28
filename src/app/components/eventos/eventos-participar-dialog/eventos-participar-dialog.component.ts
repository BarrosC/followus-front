import { PessoaVO } from './../../../base/vo/pessoa';
import { AuthService } from './../../../base/util/auth.service';
import { EventosService } from './../eventos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventoVO } from './../../../base/vo/evento';
import { Component, OnInit, Inject } from '@angular/core';
import { PessoaSimplificadaVO } from '../../../base/vo/pessoa-simplificada';

@Component({
  selector: 'app-eventos-participar-dialog',
  templateUrl: './eventos-participar-dialog.component.html',
  styleUrls: ['./eventos-participar-dialog.component.css']
})
export class EventosParticiparDialogComponent implements OnInit {

  public evento: EventoVO;

  constructor(public dialogRef: MatDialogRef<EventosParticiparDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: EventoVO, private eventosService: EventosService, private authService: AuthService) { }

  ngOnInit() {    
    this.evento = this.data;
  }

  participarEvento() {
    const pessoaLogada: PessoaVO = this.authService.getLoggedPerson();
    const pessoa: PessoaSimplificadaVO = new PessoaSimplificadaVO(pessoaLogada.nome, pessoaLogada.id);

    this.evento.participantes.push(pessoa);

    this.eventosService.alterarEvento(this.evento).subscribe(response => {
      this.eventosService.showSuccess("Agora você está participando do evento!");
      this.dialogRef.close();
    },
    error => {
      this.eventosService.hideLoader();
      this.eventosService.showError("Erro ao participar do evento");
    });
  }

}
