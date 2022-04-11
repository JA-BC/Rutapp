import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouteFilterComponent } from './filter/filter.component';

import { SuggestPage } from './suggest.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestPage
  }
];

@NgModule({
  declarations: [
    SuggestPage,
    RouteFilterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class SuggestPageModule { }
