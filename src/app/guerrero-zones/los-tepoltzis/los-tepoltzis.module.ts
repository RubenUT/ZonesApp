import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosTepoltzisPageRoutingModule } from './los-tepoltzis-routing.module';

import { LosTepoltzisPage } from './los-tepoltzis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosTepoltzisPageRoutingModule
  ],
  declarations: [LosTepoltzisPage]
})
export class LosTepoltzisPageModule {}
