import { PessoaVO } from './../../base/vo/pessoa';
import { PerfilDialogComponent } from './perfil-dialog/perfil-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public pessoa:PessoaVO = new PessoaVO();

  constructor(public dialog: MatDialog, public perfilService: PerfilService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")) {
      this.recuperarPessoa();
    }
  }

  recuperarPessoa() {
    this.perfilService.recuperarPessoa().subscribe(response => {
      this.pessoa = response;
    },
    error => {
      this.perfilService.hideLoader();
      this.perfilService.showError("Erro ao recuperar usuário");
    });
  }

  openDialog() {
    this.dialog.open(PerfilDialogComponent, {
      data: this.pessoa,
      disableClose: true 
    });
  }

}
