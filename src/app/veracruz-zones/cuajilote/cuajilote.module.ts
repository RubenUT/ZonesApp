import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuajilotePageRoutingModule } from './cuajilote-routing.module';

import { CuajilotePage } from './cuajilote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuajilotePageRoutingModule
  ],
  declarations: [CuajilotePage]
})
export class CuajilotePageModule {}
