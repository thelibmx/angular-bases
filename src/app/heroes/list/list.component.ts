import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Ironman','Batman','Hulk','thor'];
  public deletedHero?:string;


  removeLastHero():void{
  const deletedHero = this.heroNames.pop();
  this.deletedHero= deletedHero;
  console.log({deletedHero} )

 }



}
