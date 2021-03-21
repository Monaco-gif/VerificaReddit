import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monaco-tombola';
  numeri = new Array<number>();
  numeroEstratto: number;
  addNum(num: HTMLInputElement): boolean {
    let number = Number(num.value);
    this.numeroEstratto = number;
    console.log(num.value);
    this.numeri.push(this.numeroEstratto);
    console.log(this.numeri);
    return false;
  }
}
