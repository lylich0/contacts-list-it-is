import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Contact} from "../../interfaces/IContact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-card',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: new Date(),
    email: '',
    address: ''
  };

  @Input() cardColor: string = '';

  constructor(private router: Router) {}

  view(id: string) {
    this.router.navigate(['/contacts', id, 'view']);
  }
}
