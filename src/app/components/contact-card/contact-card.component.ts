import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Contact} from "../../interfaces/IContact";
import {Router} from "@angular/router";
import {ContactService} from "../../services/contact/contact.service";

@Component({
  selector: 'app-contact-card',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent  {
  @Input() contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: new Date(),
    email: '',
    address: ''
  };

  constructor(
    private router: Router,
    private contactService: ContactService,
  ) {}

  view(id: string) {
    this.contactService.setState('view');
    this.router.navigate(['/contacts', id, 'view']);
  }

  edit(id: string) {
    this.contactService.setState('edit');
    this.router.navigate(['/contacts', id, 'edit']);
  }

  delete(id: string) {
    this.contactService.delete(id).subscribe(() => {
      this.contactService.getAllContacts();
      window.location.reload();
    })
  }

  formatPhone(phoneNumber: string): string {
    const parts = phoneNumber.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
    return parts ? `${parts[1]}-${parts[2]}-${parts[3]}` : phoneNumber;
  }
}
