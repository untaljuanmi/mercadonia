import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/pages/home-page/home-page.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
