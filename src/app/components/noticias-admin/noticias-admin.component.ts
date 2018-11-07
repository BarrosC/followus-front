import { NoticiasDetalheDialogComponent } from './../noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component';
import { NoticiasAdminRemoverDialogComponent } from './noticias-admin-remover-dialog/noticias-admin-remover-dialog.component';
import { NoticiasAdminService } from './noticias-admin.service';
import { NoticiaVO } from './../../base/vo/noticia';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NoticiasAdminDialogComponent } from './noticias-admin-dialog/noticias-admin-dialog.component';

@Component({
  selector: 'app-noticias-admin',
  templateUrl: './noticias-admin.component.html',
  styleUrls: ['./noticias-admin.component.css']
})
export class NoticiasAdminComponent implements OnInit {

  public noticias: Array<NoticiaVO>;

  constructor(private dialog: MatDialog, private noticiasAdminService: NoticiasAdminService) { }

  ngOnInit() {
    this.recuperarNoticias();
  }

  openDialog(noticia) {
    if(!noticia) {
      noticia = null;
    }

    const dialogRef = this.dialog.open(NoticiasAdminDialogComponent, {
      data: noticia,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recuperarNoticias();
    });
  }

  recuperarNoticias() {
    this.noticiasAdminService.recuperarNoticias().subscribe(response => {
      this.noticias = response;
    },
    error => {
      this.noticiasAdminService.hideLoader();
      this.noticiasAdminService.showError("Erro ao recuperar notícias");
    });
  }

  detalheNoticiaDialog(noticia: String) {
    this.dialog.open(NoticiasDetalheDialogComponent, {
      data: noticia,
      disableClose: true
    });
  }

  removerNoticiaDialog(noticia: NoticiaVO) {
    const dialogRef = this.dialog.open(NoticiasAdminRemoverDialogComponent, {
      data: noticia,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recuperarNoticias();
    });
  }

}
