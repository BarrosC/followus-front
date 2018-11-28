import { PessoaVO } from './../vo/pessoa';
import { SidenavMenuService } from './sidenav-menu.service';
import { AuthService } from './../util/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {

  public pessoa:PessoaVO = new PessoaVO();

  constructor(private authService:AuthService, private sidenavMenuService: SidenavMenuService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")) {
      this.recuperarPessoa();
    }
  }

  recuperarPessoa() {
    this.sidenavMenuService.showLoader();

    this.sidenavMenuService.recuperarPessoa().subscribe(response => {
      this.sidenavMenuService.hideLoader();
      this.pessoa = response;
      localStorage.setItem('currentPerson', JSON.stringify(response));
    },
    error => {
      this.sidenavMenuService.hideLoader();
      this.sidenavMenuService.showError("Erro ao recuperar usuário");
      this.authService.logout();
    });
  }

  sair() {
    this.authService.logout();
  }

}
