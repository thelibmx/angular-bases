import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string = 'mi primera aplicacion ';
  public counter:number = 0;

increaseBy():void {
this.counter += 1;
}

decreaseBy():void{
  this.counter -= 1;
}

restableceBy():void {
  this.counter = 0;
  }





}
