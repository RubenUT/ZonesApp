import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XlapakPageRoutingModule } from './xlapak-routing.module';

import { XlapakPage } from './xlapak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XlapakPageRoutingModule
  ],
  declarations: [XlapakPage]
})
export class XlapakPageModule {}
