
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/char.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}