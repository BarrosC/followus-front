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
    this.recuperarNoticia();
  }

  openDialog() {
    this.dialog.open(NoticiasAdminDialogComponent, {
      disableClose: true
    });
  }

  openDialogEdit(noticia) {
    this.dialog.open(NoticiasAdminDialogComponent, {
      data: noticia,
      disableClose: true
    });
  }

  recuperarNoticia() {
    this.noticiasAdminService.recuperarNoticias().subscribe(response => {
      this.noticias = response;
    },
    error => {
      this.noticiasAdminService.hideLoader();
      this.noticiasAdminService.showError("Erro ao recuperar notícias");
    });
  }

  removerNoticiaDialog(noticiaId: String) {
    this.dialog.open(NoticiasAdminRemoverDialogComponent, {
      data: noticiaId,
      disableClose: true
    });
  }

}
