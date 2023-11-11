import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdznaPageRoutingModule } from './edzna-routing.module';

import { EdznaPage } from './edzna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdznaPageRoutingModule
  ],
  declarations: [EdznaPage]
})
export class EdznaPageModule {}
