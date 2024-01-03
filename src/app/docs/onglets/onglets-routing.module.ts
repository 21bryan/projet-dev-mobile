import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletsPage } from './onglets.page';

const routes: Routes = [
  {
    path: '',
    component: OngletsPage,
    children:[
    {path:'home', loadChildren:()=>import('../../home/home.module').then(m=>m.HomePageModule)
    },
    {path:'', redirectTo:'/onglets/home', pathMatch:'full'},
    {
     path:'notifications',
     loadChildren:()=>import('../notifications/notifications.module').then(m=>m.NotificationsPageModule)
    },
    {
     path:'localisation',
     loadChildren:()=>import('../localisation/localisation.module').then(m=>m.LocalisationPageModule)
    },
 ]
    },








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletsPageRoutingModule {}
