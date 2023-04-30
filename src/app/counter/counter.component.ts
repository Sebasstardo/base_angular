import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter</h3>
    {{ counter }}
    <br />
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class Counter {
  counter: number = 10;
  constructor() {}
  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}
