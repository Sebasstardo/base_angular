import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  name : string = 'ironMan';
  age : number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  
  get capitName():string{
    return this.name.toUpperCase()
  }

  getHeroeDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
     this.name = "spiderman";
  }
  changeAge():void{
     this.age = 15;
  }
  reset():void{
    this.name = 'ironMan'
    this.age = 45
  }

}
