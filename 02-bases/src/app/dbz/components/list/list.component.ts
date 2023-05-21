import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/char.interface';

@Component({
  selector: 'dbz-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Broly',
      power: 23000,
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ): void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }

}
