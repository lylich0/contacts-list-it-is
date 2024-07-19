import { Injectable } from '@angular/core';
import {Contact} from "../../interfaces/IContact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  getById(id: string | null): Contact {
    const contacts = this.getAllContacts();
    return <Contact>contacts.find(contact => contact.id === id);
  }

  getAllContacts(): Contact[] {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  }
}
