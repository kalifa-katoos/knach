import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  template: `
    <h2>Customer List</h2>
    <ul>
      <li *ngFor="let customer of customers$ | async">
        {{ customer.name }} - {{ customer.phone }}
      </li>
    </ul>
  `,
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
    this.customers$ = this.customerService.getCustomers();
  }

  ngOnInit(): void {
  }
}
