import { Injectable } from '@angular/core';
import { Debt } from '../models/debt.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtService {
  private debts: Debt[] = [
    { id: 1, customerId: 1, amount: 100, date: new Date(), description: 'Invoice #123' },
    { id: 2, customerId: 2, amount: 200, date: new Date(), description: 'Invoice #456' }
  ];

  private debtsSubject = new BehaviorSubject<Debt[]>(this.debts);
  debts$ = this.debtsSubject.asObservable();

  constructor() { }

  getDebts(): Observable<Debt[]> {
    return this.debts$;
  }

  getDebt(id: number): Debt | undefined {
    return this.debts.find(debt => debt.id === id);
  }

  getDebtsByCustomerId(customerId: number): Debt[] {
    return this.debts.filter(debt => debt.customerId === customerId);
  }

  addDebt(debt: Debt): void {
    debt.id = this.debts.length > 0 ? Math.max(...this.debts.map(d => d.id)) + 1 : 1;
    this.debts.push(debt);
    this.debtsSubject.next([...this.debts]);
  }

  updateDebt(debt: Debt): void {
    const index = this.debts.findIndex(d => d.id === debt.id);
    if (index !== -1) {
      this.debts[index] = debt;
      this.debtsSubject.next([...this.debts]);
    }
  }

  deleteDebt(id: number): void {
    this.debts = this.debts.filter(debt => debt.id !== id);
    this.debtsSubject.next([...this.debts]);
  }
}
