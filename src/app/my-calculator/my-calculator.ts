import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-calculator.html',
  styleUrl: './my-calculator.scss'
})
export class MyCalculator {
	public first: number = 1;

	public second: number = 1;

	public operation: string = '+';

	public operations: string[] = ['+', '-', '*', '/'];

	public result?: number; 

	public calc() {
		switch (this.operation) {
			case '+':
				this.result = this.first + this.second;
				break;
			case '-':
				this.result = this.first - this.second;
				break;
			case '*':
				this.result = this.first * this.second;
				break;
			case '/':
				this.result = this.first / this.second;
				break;
		}
	}
}
