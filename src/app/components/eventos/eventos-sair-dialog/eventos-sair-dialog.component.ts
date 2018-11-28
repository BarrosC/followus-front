import { PessoaSimplificadaVO } from './../../../base/vo/pessoa-simplificada';
import { PessoaVO } from './../../../base/vo/pessoa';
import { AuthService } from './../../../base/util/auth.service';
import { EventosService } from './../eventos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventoVO } from './../../../base/vo/evento';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-eventos-sair-dialog',
  templateUrl: './eventos-sair-dialog.component.html',
  styleUrls: ['./eventos-sair-dialog.component.css']
})
export class EventosSairDialogComponent implements OnInit {

  public evento: EventoVO;

  constructor(public dialogRef: MatDialogRef<EventosSairDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: EventoVO, private eventosService: EventosService, private authService: AuthService) { }

  ngOnInit() {    
    this.evento = this.data;
  }

  sairEvento() {
    const pessoa: PessoaVO = this.authService.getLoggedPerson();

    this.evento.participantes.forEach((participante, index) => {
      if (participante.personId === pessoa.id) {
        this.evento.participantes.splice(index, 1);

        this.eventosService.alterarEvento(this.evento).subscribe(response => {
          this.eventosService.showSuccess("Agora você está participando do evento!");
          this.dialogRef.close();
        },
        error => {
          this.eventosService.hideLoader();
          this.eventosService.showError("Erro ao participar do evento");
        });

        return;
      }
    });
  }

}
