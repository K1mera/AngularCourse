import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
