import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-novo-dialog',
  templateUrl: './eventos-novo-dialog.component.html',
  styleUrls: ['./eventos-novo-dialog.component.css']
})
export class EventosNovoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventosNovoDialogComponent>) { }

  ngOnInit() {
  }

}
