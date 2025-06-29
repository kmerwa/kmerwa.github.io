import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  contactInfo = [
    { type: "LOCATION", info: "Culaba, Biliran, PH" },
    { type: "EMAIL", info: "kevinpaulmerwa@gmail.com" },
    { type: "PHONE", info: "+63-927-272-5447" },
    { type: "GITHUB", info: "@kmerwa" },
    { type: "LINKEDIN", info: "in/kmerwa" },
  ]

  activeContacts = false;

  toggleContacts() {
    this.activeContacts = !this.activeContacts;
  }

}
