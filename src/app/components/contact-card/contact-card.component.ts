import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Contact} from "../../interfaces/IContact";

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
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: '',
    email: '',
    address: ''
  };

  @Input() cardColor: string = '';
}
