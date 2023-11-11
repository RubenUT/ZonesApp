import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HochobPageRoutingModule } from './hochob-routing.module';

import { HochobPage } from './hochob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HochobPageRoutingModule
  ],
  declarations: [HochobPage]
})
export class HochobPageModule {}
