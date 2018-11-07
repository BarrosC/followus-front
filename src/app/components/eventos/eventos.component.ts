import { EventosNovoDialogComponent } from './eventos-novo-dialog/eventos-novo-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(noticia) {
    if(!noticia) {
      noticia = null;
    }

    const dialogRef = this.dialog.open(EventosNovoDialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.recuperarNoticias();
    });
  }

}
