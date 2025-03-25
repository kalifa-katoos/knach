import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-form',
  standalone: true,
  imports: [],
  template: `
    <p>
      debt-form works!
    </p>
  `,
  styleUrls: ['./debt-form.component.css']
})
export class DebtFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
