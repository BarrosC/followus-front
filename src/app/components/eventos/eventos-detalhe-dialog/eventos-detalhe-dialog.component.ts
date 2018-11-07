import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { EventoVO } from '../../../base/vo/evento';

@Component({
  selector: 'app-eventos-detalhe-dialog',
  templateUrl: './eventos-detalhe-dialog.component.html',
  styleUrls: ['./eventos-detalhe-dialog.component.css']
})
export class EventosDetalheDialogComponent implements OnInit {

  public evento: EventoVO = new EventoVO();

  constructor(public dialogRef: MatDialogRef<EventosDetalheDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: EventoVO) { }

  ngOnInit() {
    this.evento = this.data;
  }

}
