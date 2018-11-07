import { PessoaVO } from './../../../base/vo/pessoa';
import { MeusEventosService } from './../meus-eventos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { EventoVO } from '../../../base/vo/evento';
import { EventosDetalheDialogComponent } from '../../eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component';
import { PessoaSimplificadaVO } from '../../../base/vo/pessoa-simplificada';

@Component({
  selector: 'app-meus-eventos-dialog',
  templateUrl: './meus-eventos-dialog.component.html',
  styleUrls: ['./meus-eventos-dialog.component.css']
})
export class MeusEventosDialogComponent implements OnInit {

  public evento: EventoVO = new EventoVO();

  constructor(public dialogRef: MatDialogRef<EventosDetalheDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: EventoVO, private meusEventosService: MeusEventosService) { }

  ngOnInit() {
    if(this.data) {
      this.evento = this.data;
    }
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const base64Header = "data:image/jpeg;base64,";
    var binaryString = readerEvt.target.result;
    this.evento.imagem= base64Header + btoa(binaryString);
  }

  salvarEvento() {
    this.meusEventosService.showLoader();

    if (!this.evento.dataCriacao) {
      this.populaCriador();
      this.evento.dataCriacao = new Date();
      this.evento.participantes = [];
    }

    if(!this.data) {
      this.meusEventosService.novoEvento(this.evento).subscribe(response => {
        this.meusEventosService.hideLoader();
        this.meusEventosService.showSuccess("Evento criado com sucesso");
        this.dialogRef.close();
      },
      error => {
        this.meusEventosService.hideLoader();
        this.meusEventosService.showError("Erro ao criar evento");
      });
    } else {
      this.meusEventosService.alterarEvento(this.evento).subscribe(response => {
        this.meusEventosService.hideLoader();
        this.meusEventosService.showSuccess("Evento alterado com sucesso");
        this.dialogRef.close();
      },
      error => {
        this.meusEventosService.hideLoader();
        this.meusEventosService.showError("Erro ao alterar evento");
      });
    }
  }

  populaCriador() {
    const pessoa:PessoaVO = JSON.parse(localStorage.getItem('currentPerson'));
    this.evento.criador = new PessoaSimplificadaVO();
    this.evento.criador.personId = pessoa.id;
    this.evento.criador.nome = pessoa.nome;
  }

}
