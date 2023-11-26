import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoltunPageRoutingModule } from './loltun-routing.module';

import { LoltunPage } from './loltun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoltunPageRoutingModule
  ],
  declarations: [LoltunPage]
})
export class LoltunPageModule {}
