import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/char.interface';

@Component({
  selector: 'app-add-chr',
  templateUrl: './add-chr.component.html',
  styleUrls: ['./add-chr.component.css']
})
export class AddChrComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    if (this.character.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

}
