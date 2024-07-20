import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../../interfaces/IContact";
import {ContactService} from "../../services/contact/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-management',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './contact-management.component.html',
  styleUrl: './contact-management.component.scss'
})
export class ContactManagementComponent implements OnInit {
  id: string | null = '';
  state: string = '';

  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: new Date(),
    email: '',
    address: ''
  }

  newContact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: new Date(),
    email: '',
    address: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {}

  header: { [key: string]: string } = {
    'add': "Create contact card",
    'edit': "Editing contact's information",
    'view': "Contact's details"
  };

  ngOnInit(): void {
    this.state = this.contactService.getState();

    if (this.state !== 'add') {
      this.id = this.route.snapshot.paramMap.get('id');
      this.contactService.getById(this.id).subscribe(contact => {
        this.contact = contact;
        console.log("This contact's ID: ", this.contact.id);
        console.log("This contact's name: ", this.contact.firstName);
      });
    }
  }

  handleFormSubmit() {
    if (this.state === 'add') {
      this.addContact();
    }
    else if (this.state === 'edit') {
      this.editContact();
    }
  }

  addContact(): void {
    this.contactService.create(this.newContact).subscribe({
      next: () => {
        this.router.navigate(['/contacts']);
      }
    })
  }

  editContact() {
    this.contactService.update(this.id, this.contact).subscribe({
      next: () => {
        this.router.navigate(['/contacts']);
      }
    });
  }
}
