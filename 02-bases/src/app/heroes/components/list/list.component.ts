import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public title: string = 'Heroes List';

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America', 'Black Widow', 'Hawkeye', 'Antman', 'Wasp', 'Black Panther', 'Doctor Strange', 'Captain Marvel', 'Vision', 'Scarlet Witch', 'Falcon', 'Winter Soldier', 'War Machine', 'Star Lord', 'Gamora', 'Drax', 'Rocket', 'Groot', 'Mantis', 'Nebula', 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America', 'Black Widow', 'Hawkeye', 'Antman', 'Wasp', 'Black Panther', 'Doctor Strange', 'Captain Marvel', 'Vision', 'Scarlet Witch', 'Falcon', 'Winter Soldier', 'War Machine', 'Star Lord', 'Gamora', 'Drax', 'Rocket', 'Groot', 'Mantis', 'Nebula']
  public deletedHero?: string;

  deleteHero():void {
   this.deletedHero = this.heroes.pop();
  }
}
