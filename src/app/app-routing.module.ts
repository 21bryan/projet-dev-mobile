import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'onglets',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'authentification',
    loadChildren: () => import('./docs/authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'creer',
    loadChildren: () => import('./docs/creer/creer.module').then( m => m.CreerPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./docs/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'localisation',
    loadChildren: () => import('./docs/localisation/localisation.module').then( m => m.LocalisationPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./docs/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'onglets',
    loadChildren: () => import('./docs/onglets/onglets.module').then( m => m.OngletsPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./docs/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'trajetbus',
    loadChildren: () => import('./docs/trajetbus/trajetbus.module').then( m => m.TrajetbusPageModule)
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('./docs/deconnexion/deconnexion.module').then( m => m.DeconnexionPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./docs/infos/infos.module').then( m => m.InfosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
