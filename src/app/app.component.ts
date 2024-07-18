import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Contact} from "./interfaces/IContact";
import {NgForOf} from "@angular/common";
import {ContactCardComponent} from "./components/contact-card/contact-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, ContactCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contacts: Contact[] = [
    {
      firstName: 'Angelina',
      lastName: 'Denver',
      phoneNumber: '212-123-4567',
      birthDate: '08.08.2005',
      email: 'angelina.denver@gmail.com',
      address: 'Colorado, United States'
    },
    {
      firstName: 'Kate',
      lastName: 'Smith',
      phoneNumber: '737-123-9067',
      birthDate: '14.06.2004',
      email: 'kate.smith@aol.com',
      address: 'South Carolina, United States'
    }
  ]

  getRandomColor() {
    const colors = ['#e0ffcd', '#fdffcd', '#ffebbb', '#ffcab0', '#defcf9', '#cadefc', '#c3bef0', '#cca8e9'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
