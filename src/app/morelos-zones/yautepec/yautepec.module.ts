import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YautepecPageRoutingModule } from './yautepec-routing.module';

import { YautepecPage } from './yautepec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YautepecPageRoutingModule
  ],
  declarations: [YautepecPage]
})
export class YautepecPageModule {}
