import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaxchilanPageRoutingModule } from './yaxchilan-routing.module';

import { YaxchilanPage } from './yaxchilan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaxchilanPageRoutingModule
  ],
  declarations: [YaxchilanPage]
})
export class YaxchilanPageModule {}
