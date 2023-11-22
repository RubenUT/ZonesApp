import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuapalcalcoPageRoutingModule } from './huapalcalco-routing.module';

import { HuapalcalcoPage } from './huapalcalco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuapalcalcoPageRoutingModule
  ],
  declarations: [HuapalcalcoPage]
})
export class HuapalcalcoPageModule {}
