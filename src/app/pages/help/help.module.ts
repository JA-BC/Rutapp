import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { HelpPage } from './help.page';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: HelpPage
  }
];

@NgModule({
  declarations: [HelpPage],
  imports: [
    IonicModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class HelpPageModule { }
