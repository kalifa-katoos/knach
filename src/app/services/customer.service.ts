import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', address: '456 Oak Ave' }
  ];

  private customersSubject = new BehaviorSubject<Customer[]>(this.customers);
  customers$ = this.customersSubject.asObservable();

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return this.customers$;
  }

  getCustomer(id: number): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  addCustomer(customer: Customer): void {
    customer.id = this.customers.length > 0 ? Math.max(...this.customers.map(c => c.id)) + 1 : 1;
    this.customers.push(customer);
    this.customersSubject.next([...this.customers]);
  }

  updateCustomer(customer: Customer): void {
    const index = this.customers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
      this.customersSubject.next([...this.customers]);
    }
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(customer => customer.id !== id);
    this.customersSubject.next([...this.customers]);
  }
}
