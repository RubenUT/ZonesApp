import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArroyoSecoPageRoutingModule } from './arroyo-seco-routing.module';

import { ArroyoSecoPage } from './arroyo-seco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArroyoSecoPageRoutingModule
  ],
  declarations: [ArroyoSecoPage]
})
export class ArroyoSecoPageModule {}
