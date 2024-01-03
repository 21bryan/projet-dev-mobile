import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerPage } from './creer.page';

const routes: Routes = [
  {
    path: '',
    component: CreerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerPageRoutingModule {}
