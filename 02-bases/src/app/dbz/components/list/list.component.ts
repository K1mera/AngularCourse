import { Component, Input } from '@angular/core';
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
      name: '',
      power: 0,
    }
  ];

  onDelete( index: number ): void {
    this.characterList.splice( index, 1 );
  }

}
