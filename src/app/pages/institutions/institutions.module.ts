import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { InstitutionsPage } from './institutions.page';
import { SwiperModule } from 'swiper/angular';
import { InstitutionsFormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: InstitutionsPage
  }
];

@NgModule({
  declarations: [
    InstitutionsPage,
    InstitutionsFormComponent
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
export class InstitutionsPageModule { }
