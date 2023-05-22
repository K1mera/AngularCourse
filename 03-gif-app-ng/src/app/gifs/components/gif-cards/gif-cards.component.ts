import { GifsService } from './../../services/gifs.service';
import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/cards.interfaces';

@Component({
  selector: 'gifs-cards',
  templateUrl: './gif-cards.component.html',
  styleUrls: ['./gif-cards.component.css']
})
export class GifCardsComponent {

  @Input()
  public gifs: Gif[] = [];

  constructor() {



  }
}
