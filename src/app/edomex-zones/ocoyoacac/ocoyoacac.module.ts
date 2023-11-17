import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcoyoacacPageRoutingModule } from './ocoyoacac-routing.module';

import { OcoyoacacPage } from './ocoyoacac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcoyoacacPageRoutingModule
  ],
  declarations: [OcoyoacacPage]
})
export class OcoyoacacPageModule {}
