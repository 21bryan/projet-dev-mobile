import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerPageRoutingModule } from './creer-routing.module';

import { CreerPage } from './creer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreerPageRoutingModule
  ],
  declarations: [CreerPage]
})
export class CreerPageModule {}
