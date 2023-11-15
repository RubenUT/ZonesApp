import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CempoalaPageRoutingModule } from './cempoala-routing.module';

import { CempoalaPage } from './cempoala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CempoalaPageRoutingModule
  ],
  declarations: [CempoalaPage]
})
export class CempoalaPageModule {}
