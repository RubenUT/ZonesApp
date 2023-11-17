import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XochicalcoPageRoutingModule } from './xochicalco-routing.module';

import { XochicalcoPage } from './xochicalco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XochicalcoPageRoutingModule
  ],
  declarations: [XochicalcoPage]
})
export class XochicalcoPageModule {}
