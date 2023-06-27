import { Component } from '@angular/core';



@Component({
  selector:'app-counter',
  template:`  <h2>{{counter}}</h2>

  <button (click)="increaseBy()">+1</button>
  <button (click)="decreaseBy()" >-1</button>
  <button (click)="restableceBy()" >Reset</button>

  <hr>
`

})

export class CounterComponent{
  public counter:number = 10;

increaseBy():void {
this.counter += 1;
}

decreaseBy():void{
  this.counter -= 1;
}

restableceBy():void {
  this.counter = 10;
  }








}




