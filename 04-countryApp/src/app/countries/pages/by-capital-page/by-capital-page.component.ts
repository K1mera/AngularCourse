import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {



  searchByCapital( term: string ) {
    console.log(term);
    console.log('im here');
  }

}
