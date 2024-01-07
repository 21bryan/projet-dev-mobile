import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajetbusPageRoutingModule } from './trajetbus-routing.module';

import { TrajetbusPage } from './trajetbus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetbusPageRoutingModule
  ],
  declarations: [TrajetbusPage]
})
export class TrajetbusPageModule {}
