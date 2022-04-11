import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { AboutPage } from './about.page';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];

@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class AboutPageModule { }
