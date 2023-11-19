import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeopantecuanitlanPageRoutingModule } from './teopantecuanitlan-routing.module';

import { TeopantecuanitlanPage } from './teopantecuanitlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeopantecuanitlanPageRoutingModule
  ],
  declarations: [TeopantecuanitlanPage]
})
export class TeopantecuanitlanPageModule {}
