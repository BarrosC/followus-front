import { AuthService } from './../../base/util/auth.service';
import { Router } from '@angular/router';
import { PessoaVO } from '../../base/vo/pessoa';
import { UsuarioVO } from '../../base/vo/usuario';
import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user:UsuarioVO = new UsuarioVO();
  public pessoa:PessoaVO = new PessoaVO();

  constructor(private signupService:SignupService, private router:Router, private authService:AuthService) { }

  ngOnInit() {
    if(this.authService.canActivate()) {
      this.router.navigate(['/dashboard']);
    }
  }

  novoUsuario() {
    this.signupService.showLoader();

    this.signupService.criarUsuario(this.user).subscribe(response => {
      this.pessoa.userId = response.id;

      this.signupService.criarPessoa(this.pessoa).subscribe(response => {
        this.signupService.hideLoader();
        this.signupService.showSuccess("Usuário criado com sucesso");
        this.router.navigate(['/']);
      },
      error => {
        this.signupService.hideLoader();
        this.signupService.showError("Erro ao criar usuário");
      });
    },
    error => {
      this.signupService.hideLoader();
      this.signupService.showError("Erro ao criar usuário");
    });
  }
}
