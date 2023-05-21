
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/char.interface';
import { v4 as uuid } from "uuid";

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

  onNewCharacter(character: Character): void {
    const onNewCharacter = { ...character, id: uuid()}
    this.characters.push(character);
  }

}