import { NoticiaVO } from './../../../base/vo/noticia';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoticiasAdminService } from './../noticias-admin.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-noticias-admin-remover-dialog',
  templateUrl: './noticias-admin-remover-dialog.component.html',
  styleUrls: ['./noticias-admin-remover-dialog.component.css']
})
export class NoticiasAdminRemoverDialogComponent implements OnInit {

  public noticia: NoticiaVO;

  constructor(public dialogRef: MatDialogRef<NoticiasAdminRemoverDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: NoticiaVO, private noticiasAdminService: NoticiasAdminService) { }

  ngOnInit() {    
    this.noticia = this.data;
  }

  removerNoticia() {
    this.noticiasAdminService.removerNoticia(this.noticia.id).subscribe(response => {
      this.noticiasAdminService.showSuccess("Notícia removida com sucesso!");
      this.dialogRef.close();
    },
    error => {
      this.noticiasAdminService.hideLoader();
      this.noticiasAdminService.showError("Erro ao remover notícias");
    });
  }

}
