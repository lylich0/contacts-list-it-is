import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../../interfaces/IContact";
import {ContactService} from "../../services/contact/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-contact-management',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './contact-management.component.html',
  styleUrl: './contact-management.component.scss'
})
export class ContactManagementComponent implements OnInit {

  id: string | null = '';

  contact: Contact = {
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

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getById(this.id);
  }
}
