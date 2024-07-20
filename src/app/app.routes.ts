import { Routes } from '@angular/router';
import {ContactManagementComponent} from "./components/contact-management/contact-management.component";
import {ContactCardListComponent} from "./components/contact-card-list/contact-card-list.component";

export const routes: Routes = [
  { path: 'contacts', component: ContactCardListComponent },
  { path: 'contacts/:id/view', component: ContactManagementComponent },
  { path: 'contacts/:id/edit', component: ContactManagementComponent },
  { path: 'contacts/new', component: ContactManagementComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];
