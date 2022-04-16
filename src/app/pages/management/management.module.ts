import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { ManagementPage } from './management.page';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: ManagementPage
  }
];

@NgModule({
  declarations: [ManagementPage],
  imports: [
    IonicModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class ManagementPageModule { }
