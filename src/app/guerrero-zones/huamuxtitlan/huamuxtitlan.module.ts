import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuamuxtitlanPageRoutingModule } from './huamuxtitlan-routing.module';

import { HuamuxtitlanPage } from './huamuxtitlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuamuxtitlanPageRoutingModule
  ],
  declarations: [HuamuxtitlanPage]
})
export class HuamuxtitlanPageModule {}
