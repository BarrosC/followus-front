import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoticiasAdminService } from './../noticias-admin.service';
import { NoticiaVO } from './../../../base/vo/noticia';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-noticias-admin-dialog',
  templateUrl: './noticias-admin-dialog.component.html',
  styleUrls: ['./noticias-admin-dialog.component.css']
})
export class NoticiasAdminDialogComponent implements OnInit {

  public noticia: NoticiaVO = new NoticiaVO();

  constructor(public dialogRef: MatDialogRef<NoticiasAdminDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: NoticiaVO, private noticiasAdminService: NoticiasAdminService) { }

  ngOnInit() {
    if(this.data) {
      this.noticia = this.data;
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
    this.noticia.imagem= base64Header + btoa(binaryString);
  }

  salvarNoticia() {
    this.noticiasAdminService.showLoader();

    if (!this.noticia.dtCriacao) {
      this.noticia.dtCriacao = new Date();
    }

    if(!this.data) {
      this.noticiasAdminService.novaNoticia(this.noticia).subscribe(response => {
        this.noticiasAdminService.hideLoader();
        this.noticiasAdminService.showSuccess("Notícia criada com sucesso");
        this.dialogRef.close();
      },
      error => {
        this.noticiasAdminService.hideLoader();
        this.noticiasAdminService.showError("Erro ao criar notícia");
      });
    } else {
      this.noticiasAdminService.alterarNoticia(this.noticia).subscribe(response => {
        this.noticiasAdminService.hideLoader();
        this.noticiasAdminService.showSuccess("Notícia alterada com sucesso");
        this.dialogRef.close();
      },
      error => {
        this.noticiasAdminService.hideLoader();
        this.noticiasAdminService.showError("Erro ao alterar notícia");
      });
    }
  }

}
