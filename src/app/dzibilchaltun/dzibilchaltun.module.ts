import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DzibilchaltunPageRoutingModule } from './dzibilchaltun-routing.module';

import { DzibilchaltunPage } from './dzibilchaltun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DzibilchaltunPageRoutingModule
  ],
  declarations: [DzibilchaltunPage]
})
export class DzibilchaltunPageModule {}
