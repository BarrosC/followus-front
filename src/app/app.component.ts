import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router){
  }

  checkHomeLocation() {
    return this.router.url === '/';
  }

  checkNoMenuLocations() {
    return !(this.router.url === '/' || this.router.url === '/login' || this.router.url === '/signup');
  }
}
