import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [],
  template: `
    <h2>Customer Details</h2>
    <div *ngIf="customer">
      <h3>{{ customer.name }}</h3>
      <p>Phone: {{ customer.phone }}</p>
      <p>Address: {{ customer.address }}</p>
    </div>
  `,
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.customerService.getCustomer(id);
  }
}
