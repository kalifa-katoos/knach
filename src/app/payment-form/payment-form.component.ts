import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [],
  template: `
    <p>
      payment-form works!
    </p>
  `,
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
