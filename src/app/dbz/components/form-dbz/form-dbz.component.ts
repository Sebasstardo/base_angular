import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-form-dbz',
  templateUrl: './form-dbz.component.html',
  styleUrls: ['./form-dbz.component.css'],
})
export class FormDbzComponent  {

  @Output()
  onNewCharacterHijo: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0,
  };
  constructor() {}

  addCharacterHijo(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacterHijo.emit(this.character)

    this.character.name = '';
    this.character.power = 0;
  }
}
