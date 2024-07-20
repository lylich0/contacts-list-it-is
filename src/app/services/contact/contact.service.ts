import {Injectable} from '@angular/core';
import {Contact} from "../../interfaces/IContact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  state: 'add' | 'edit' | 'view' = 'add';

  setState(state: 'add' | 'edit' | 'view') {
    this.state = state;
    localStorage.setItem('state', state);
  }

  getState(): 'add' | 'edit' | 'view' {
    return this.state;
  }

  constructor() {
    const storedState = localStorage.getItem('state');
    if (storedState) {
      this.state = storedState as 'add' | 'edit' | 'view';
    }
  }

  getById(id: string | null): Observable<Contact> {
    return new Observable(observer => {
      this.getAllContacts().subscribe(contacts => {
        const contact = contacts.find(contact => contact.id === id);
        observer.next(contact);
        observer.complete();
      });
    });
  }

  getAllContacts(): Observable<Contact[]> {
    return new Observable(observer => {
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
          observer.next(JSON.parse(storedContacts));
        }
      else {
        observer.error(new Error('Contacts not found'));
      }
      observer.complete();
    });
  }

  create(newContact: Contact): Observable<Contact> {
    return new Observable(observer => {
        this.getAllContacts().subscribe(contacts => {
          newContact.id = this.generateRandomId().toString();
          contacts.push(newContact);
          localStorage.setItem('contacts', JSON.stringify(contacts));
          observer.next(newContact);
          observer.complete();
        })
    })
  }

  update(id: string | null, updatedContact: Contact): Observable<Contact> {
    return new Observable(observer => {
        this.getAllContacts().subscribe(contacts => {
          const index = contacts.findIndex(contact => contact.id === id);
          contacts[index] = updatedContact;
          localStorage.setItem('contacts', JSON.stringify(contacts));
          observer.next(updatedContact);
          observer.complete();
        })
    })
  }

  delete(id: string): Observable<Contact> {
    return new Observable(observer => {
      this.getAllContacts().subscribe(contacts => {
        const index = contacts.findIndex(contact => contact.id === id);
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        observer.next();
        observer.complete();
      })
    })
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 9000) + 1000;
  }
}
