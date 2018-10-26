import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-dialog',
  templateUrl: './perfil-dialog.component.html',
  styleUrls: ['./perfil-dialog.component.css']
})
export class PerfilDialogComponent implements OnInit {

  public foto:any;

  constructor() { }

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
    var binaryString = readerEvt.target.result;
    this.foto= btoa(binaryString);
    console.log(btoa(binaryString));
  }

}
