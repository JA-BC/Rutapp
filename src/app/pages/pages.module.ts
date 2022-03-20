import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  declarations: [PagesPage],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class PagesModule { }
