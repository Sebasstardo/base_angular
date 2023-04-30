import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrls: ['./list-dbz.component.css'],
})
export class ListDbzComponent implements OnInit {
  @Input()
  characterList: Character[] = [
    {
      name: '',
      power: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
