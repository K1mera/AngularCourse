import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h1> {{ title }} </h1>
    
      <h3>Counter:  {{ counter }} </h3>

      <button (click)="increment()" >+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decrement()">-1</button>
  `
})

export class CounterComponent {
  public title: string = 'Counter App';
  public counter: number = 0;

  increment(): void {
    this.counter += 1;
  }
  decrement(): void {
    if (this.counter > 0) this.counter -= 1;
  }
  reset(): void {
    this.counter = 0;
  }
}
