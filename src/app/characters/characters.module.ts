import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharactersPage } from './characters.page';
import { SearchbarComponent } from '../searchbar/searchbar.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharactersPage, SearchbarComponent]
})
export class CharactersPageModule {}
