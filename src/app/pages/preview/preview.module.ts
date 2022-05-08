import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { PreviewPage } from './preview.page';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PreviewPage
  }
];

SwiperCore.use([Pagination]);

@NgModule({
  declarations: [PreviewPage],
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
export class PreviewPageModule { }
