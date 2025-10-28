import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  result: number = 0;

  calculate(): void {
    const rateDecimal = this.rate / 100;
    this.result = this.totalDebt(this.principal, rateDecimal, this.time);
  }

  totalDebt(principal: number, rate: number, time: number): number {
    return principal + principal * rate * time;
  }
}
