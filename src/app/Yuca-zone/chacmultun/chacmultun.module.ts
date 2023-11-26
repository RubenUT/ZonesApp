import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChacmultunPageRoutingModule } from './chacmultun-routing.module';

import { ChacmultunPage } from './chacmultun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChacmultunPageRoutingModule
  ],
  declarations: [ChacmultunPage]
})
export class ChacmultunPageModule {}
