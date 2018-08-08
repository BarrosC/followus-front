import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    document.getElementById("main-header").classList.add("transparent")
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
    document.getElementById("main-header").classList.remove("transparent")
  }

  scroll = (): void => {
    const yPos = -(window.scrollY / 15); 
    const bgpos = '50% '+ yPos + 'px';  
    const selectedElement = document.getElementById("main-banner");  
    const headerElement = document.getElementById("main-header");      

    selectedElement.style.backgroundPosition = bgpos;

    if(-yPos > 0) {
      headerElement.classList.remove("transparent");
    } else {
      headerElement.classList.add("transparent");
    }
  };

}
