import { Router } from '@angular/router';
import { AuthService } from './../../base/util/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioVO } from '../../base/vo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:UsuarioVO = new UsuarioVO();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    if(this.authService.canActivate()) {
      this.router.navigate(['/dashboard']);
    }
  }

  entrar() {
    this.authService.login(this.user);
  }

}
