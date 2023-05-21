import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/char.interface';


@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent {

  constructor( public DbzService: DbzService  ) {
    
}
}