import { Injectable } from '@angular/core';
import { Payment } from '../models/payment.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [
    { id: 1, debtId: 1, amount: 50, date: new Date() },
    { id: 2, debtId: 2, amount: 100, date: new Date() }
  ];

  private paymentsSubject = new BehaviorSubject<Payment[]>(this.payments);
  payments$ = this.paymentsSubject.asObservable();

  constructor() { }

  getPayments(): Observable<Payment[]> {
    return this.payments$;
  }

  getPayment(id: number): Payment | undefined {
    return this.payments.find(payment => payment.id === id);
  }

  getPaymentsByDebtId(debtId: number): Payment[] {
    return this.payments.filter(payment => payment.debtId === debtId);
  }

  addPayment(payment: Payment): void {
    payment.id = this.payments.length > 0 ? Math.max(...this.payments.map(p => p.id)) + 1 : 1;
    this.payments.push(payment);
    this.paymentsSubject.next([...this.payments]);
  }

  updatePayment(payment: Payment): void {
    const index = this.payments.findIndex(p => p.id === payment.id);
    if (index !== -1) {
      this.payments[index] = payment;
      this.paymentsSubject.next([...this.payments]);
    }
  }

  deletePayment(id: number): void {
    this.payments = this.payments.filter(payment => payment.id !== id);
    this.paymentsSubject.next([...this.payments]);
  }
}
