import { PessoaVO } from './../vo/pessoa';
import { environment } from './../../../environments/environment';
import { BaseService } from './base.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService extends BaseService implements CanActivate {

  constructor(public http: HttpClient, public snackBar: MatSnackBar, private router: Router) { super(http, snackBar); }

  login(user) {

    this.showLoader();

    this.post(environment.baseUrl + "/Users/login", user).subscribe(response => {
      localStorage.setItem('currentUser', JSON.stringify(response));
      this.headers.append('ACCESS_TOKEN', response.id);
      this.getPerson();
    },
    error => {
      this.hideLoader();
      this.showError("Email ou senha inválidos");
    });
  }

  getPerson() {
    const curUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    const query = JSON.stringify({"where": {"userId": {"like":curUserId}}});

    this.get(environment.baseUrl + '/Pessoas/findOne?filter=' + query).subscribe(response => {
      this.hideLoader();
      localStorage.setItem('currentPerson', JSON.stringify(response));
      this.router.navigate(['/dashboard']);
    },
    error => {
      this.hideLoader();
      this.showError("Erro ao recuperar usuário");
      this.logout();
    });
  }

  getLoggedPerson() {
    const pessoa: PessoaVO = JSON.parse(localStorage.getItem('currentPerson'));
    return pessoa;
  }

  logout() {
    localStorage.clear();
    this.headers.delete('ACCESS_TOKEN');
    this.router.navigate(['/login']);
  }

  canActivate(): boolean {

    const curUser = JSON.parse(localStorage.getItem('currentUser'));    

    if(curUser) {
      const creationDate = new Date(curUser.created);
      const expirationDate = new Date(creationDate.getTime() + curUser.ttl*1000);

      if (!(expirationDate > new Date())) {
        this.router.navigate(['/login']);
        return false;
      }

      return true;
    } else {
      
      if (this.router.url !== '/signup') {
        this.router.navigate(['/login']);
      }
      
      return false;
    }
    
  }
}