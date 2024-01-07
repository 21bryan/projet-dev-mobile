import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetbusPage } from './trajetbus.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetbusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetbusPageRoutingModule {}
