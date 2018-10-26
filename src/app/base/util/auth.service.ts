import { environment } from './../../../environments/environment';
import { BaseService } from './base.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService extends BaseService implements CanActivate {

  constructor(public http: HttpClient, public snackBar: MatSnackBar, private router:Router) { super(http, snackBar); }

  login(user) {

    this.showLoader();

    this.post(environment.baseUrl + "/Users/login", user).subscribe(response => {
      localStorage.setItem('currentUser', JSON.stringify(response));
      this.headers.append('ACCESS_TOKEN', response.id);
      this.hideLoader();
      this.router.navigate(['/dashboard']);
    },
    error => {
      this.hideLoader();
      this.showError("Email ou senha inválidos");
    });
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
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}