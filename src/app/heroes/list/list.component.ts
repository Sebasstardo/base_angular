import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}
  heroesNames: string[] = ['Spiderman', 'Thor', 'batman', 'superman'];
  deleteHeroe?: string =''

  removeHeroe():void{
    this.deleteHeroe = this.heroesNames.pop()
  }


  ngOnInit(): void {}
}
