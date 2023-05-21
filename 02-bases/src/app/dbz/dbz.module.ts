import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddChrComponent } from './components/add-chr/add-chr.component';



@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddChrComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
