import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

public name:string ='ironman';
public age:number  = 50;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
  return `${this.name } - ${ this.age }  `;
}


changeHero():string{
  this.name='BATMAN';
  return this.name;
}

changeAge():number {
  this.age=15;
  return this.age;
}

resetform():void{
this.name='iroman';
this.age=50;

}


}
