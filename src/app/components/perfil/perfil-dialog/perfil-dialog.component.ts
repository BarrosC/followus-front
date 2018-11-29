import { Router } from '@angular/router';
import { PerfilService } from './../perfil.service';
import { PessoaVO } from './../../../base/vo/pessoa';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-perfil-dialog',
  templateUrl: './perfil-dialog.component.html',
  styleUrls: ['./perfil-dialog.component.css']
})
export class PerfilDialogComponent implements OnInit {

  public pessoa: PessoaVO;

  constructor(public dialogRef: MatDialogRef<PerfilDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: PessoaVO, public perfilService: PerfilService, private router: Router) { }

  ngOnInit() {
    this.pessoa = this.data;
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
    this.pessoa.foto= base64Header + btoa(binaryString);
  }

  atualizarPessoa() {
    this.perfilService.showLoader();

    this.perfilService.atualizarPessoa(this.pessoa).subscribe(response => {
      this.perfilService.hideLoader();
      this.perfilService.showSuccess("Usuário atualizado com sucesso");
      this.dialogRef.close();
      this.router.navigate(['/perfil']);
    },
    error => {
      this.perfilService.hideLoader();
      this.perfilService.showError("Erro ao atualizar usuário");
    });
  }

}
