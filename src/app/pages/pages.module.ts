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
      },
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'suggest',
        loadChildren: () => import('./suggest/suggest.module').then(m => m.SuggestPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then(m => m.HelpPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'management',
        loadChildren: () => import('./management/management.module').then(m => m.ManagementPageModule)
      },
      {
        path: 'stops',
        loadChildren: () => import('./stops/stops.module').then(m => m.StopsPageModule)
      },
      {
        path: 'lines',
        loadChildren: () => import('./lines/lines.module').then(m => m.LinesPageModule)
      },
      {
        path: 'institutions',
        loadChildren: () => import('./institutions/institutions.module').then(m => m.InstitutionsPageModule)
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
