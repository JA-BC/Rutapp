import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { LinesPage } from './lines.page';
import { SwiperModule } from 'swiper/angular';
import { LinesFormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LinesPage
  }
];

@NgModule({
  declarations: [
    LinesPage,
    LinesFormComponent
  ],
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
export class LinesPageModule { }
