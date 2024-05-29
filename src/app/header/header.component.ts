import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentTheme : string = 'light';

  toggleTheme(){
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', this.currentTheme);

     const header = document.querySelector('.header') as HTMLElement;

     if (this.currentTheme === 'light') {
         header.style.backgroundColor = '#ffffff';
     } else {
         header.style.backgroundColor = '#1e1e1e';
     }
  }
  
}
