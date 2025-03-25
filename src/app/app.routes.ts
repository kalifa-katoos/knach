import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

export const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
];
