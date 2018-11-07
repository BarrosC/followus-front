import { PessoaSimplificadaVO } from './../../../base/vo/pessoa-simplificada';
import { PessoaVO } from './../../../base/vo/pessoa';
import { EventosService } from './../eventos.service';
import { EventoVO } from './../../../base/vo/evento';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-novo-dialog',
  templateUrl: './eventos-novo-dialog.component.html',
  styleUrls: ['./eventos-novo-dialog.component.css']
})
export class EventosNovoDialogComponent implements OnInit {

  public evento: EventoVO = new EventoVO();

  constructor(public dialogRef: MatDialogRef<EventosNovoDialogComponent>, public eventosService: EventosService) { }

  ngOnInit() {
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
    this.eventosService.showLoader();

    this.populaCriador();
    this.evento.dataCriacao = new Date();
    this.evento.participantes = [];
    
    this.eventosService.novoEvento(this.evento).subscribe(response => {
      this.eventosService.hideLoader();
      this.eventosService.showSuccess("Evento criado com sucesso");
      this.dialogRef.close();
    },
    error => {
      this.eventosService.hideLoader();
      this.eventosService.showError("Erro ao criar evento");
    });
  }

  populaCriador() {
    const pessoa:PessoaVO = JSON.parse(localStorage.getItem('currentPerson'));
    this.evento.criador = new PessoaSimplificadaVO();
    this.evento.criador.personId = pessoa.id;
    this.evento.criador.nome = pessoa.nome;
  }

}
