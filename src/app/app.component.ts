import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {ContactCardComponent} from "./components/contact-card/contact-card.component";
import {ContactManagementComponent} from "./components/contact-management/contact-management.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, ContactCardComponent, ContactManagementComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
