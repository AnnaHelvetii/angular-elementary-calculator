import { Component, signal } from '@angular/core';
import { MyCalculator } from "./my-calculator/my-calculator";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	MyCalculator, 
	FormsModule, 
	ReactiveFormsModule, 
	CommonModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-angularchik');
}
