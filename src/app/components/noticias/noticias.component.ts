import { NoticiasDetalheDialogComponent } from './noticias-detalhe-dialog/noticias-detalhe-dialog.component';
import { NoticiaVO } from './../../base/vo/noticia';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticias: Array<NoticiaVO>;

  constructor(private dialog: MatDialog, private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.recuperarNoticia();
  }

  recuperarNoticia() {
    this.noticiasService.recuperarNoticias().subscribe(response => {
      this.noticias = response;
    },
    error => {
      this.noticiasService.hideLoader();
      this.noticiasService.showError("Erro ao recuperar notícias");
    });
  }

  detalheNoticiaDialog(noticia: String) {
    this.dialog.open(NoticiasDetalheDialogComponent, {
      data: noticia,
      disableClose: true
    });
  }

}
