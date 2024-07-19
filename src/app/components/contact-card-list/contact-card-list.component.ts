import {Component, OnInit} from '@angular/core';
import {Contact} from "../../interfaces/IContact";
import {ContactCardComponent} from "../contact-card/contact-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-card-list',
  standalone: true,
  imports: [
    ContactCardComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './contact-card-list.component.html',
  styleUrl: './contact-card-list.component.scss'
})
export class ContactCardListComponent implements OnInit {
  contacts: Contact[] = [
    {
      id: '1',
      firstName: 'Angelina',
      lastName: 'Denver',
      phoneNumber: '212-123-4567',
      birthDate: new Date('2005-08-08'),
      email: 'angelina.denver@gmail.com',
      address: 'Colorado, United States'
    },
    {
      id: '2',
      firstName: 'Kate',
      lastName: 'Smith',
      phoneNumber: '737-123-9067',
      birthDate: new Date('2004-07-14'),
      email: 'kate.smith@aol.com',
      address: 'South Carolina, United States'
    }
  ]

  isSearchActive: boolean = false;
  searchTerm: string = '';
  searchResults: Contact[] = [];

  ngOnInit(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  search() {
    this.searchTerm = this.searchTerm.trim();

    if (!this.searchTerm) {
      this.searchResults = [];
      this.isSearchActive = false;
      return
    }

    this.searchResults = this.contacts.filter(contact => {
      const fullName = `${contact.firstName} ${contact.lastName}`;
      const regex = new RegExp(`\\b${this.searchTerm}`, 'gi');
      return regex.test(fullName);
    })

    this.isSearchActive = true;
  }
}
