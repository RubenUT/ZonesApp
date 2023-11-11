import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicannaPageRoutingModule } from './chicanna-routing.module';

import { ChicannaPage } from './chicanna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChicannaPageRoutingModule
  ],
  declarations: [ChicannaPage]
})
export class ChicannaPageModule {}
