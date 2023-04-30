import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

    characters: Character[] = [
        {
          name: 'Krilin',
          power: 1000,
        },
        {
          name: 'Vegetta',
          power: 1500,
        },
        {
          name: 'Gohan',
          power: 500,
        },
      ];
    
      
          
    
      onNewCharacterPadre(character: Character): void {
        const newCharacter: Character = {  ...character };
        this.characters.push(newCharacter);
      }

    constructor() { }
    
}