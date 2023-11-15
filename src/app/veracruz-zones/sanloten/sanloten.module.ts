import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanlotenPageRoutingModule } from './sanloten-routing.module';

import { SanlotenPage } from './sanloten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanlotenPageRoutingModule
  ],
  declarations: [SanlotenPage]
})
export class SanlotenPageModule {}
