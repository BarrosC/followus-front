import { environment } from './../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../util/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavMenuService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

}