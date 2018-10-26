import { NoticiaVO } from './../../../base/vo/noticia';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-noticias-detalhe-dialog',
  templateUrl: './noticias-detalhe-dialog.component.html',
  styleUrls: ['./noticias-detalhe-dialog.component.css']
})
export class NoticiasDetalheDialogComponent implements OnInit {

  public noticia: NoticiaVO = new NoticiaVO();

  constructor(public dialogRef: MatDialogRef<NoticiasDetalheDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: NoticiaVO) { }

  ngOnInit() {
    this.noticia = this.data;
  }

}
