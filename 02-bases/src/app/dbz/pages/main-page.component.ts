import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/char.interface';


@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent {


  constructor( private dbzService: DbzService  ) {}

    get characters(): Character[] {
      return [...this.dbzService.characters];
    }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
