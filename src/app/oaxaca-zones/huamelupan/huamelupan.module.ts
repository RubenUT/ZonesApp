import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuamelupanPageRoutingModule } from './huamelupan-routing.module';

import { HuamelupanPage } from './huamelupan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuamelupanPageRoutingModule
  ],
  declarations: [HuamelupanPage]
})
export class HuamelupanPageModule {}
