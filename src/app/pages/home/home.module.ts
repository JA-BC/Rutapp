import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class HomePageModule { }
