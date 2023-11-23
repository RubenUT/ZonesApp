import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XelhaPageRoutingModule } from './xelha-routing.module';

import { XelhaPage } from './xelha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XelhaPageRoutingModule
  ],
  declarations: [XelhaPage]
})
export class XelhaPageModule {}
