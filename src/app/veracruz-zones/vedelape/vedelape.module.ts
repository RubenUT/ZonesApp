import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VedelapePageRoutingModule } from './vedelape-routing.module';

import { VedelapePage } from './vedelape.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VedelapePageRoutingModule
  ],
  declarations: [VedelapePage]
})
export class VedelapePageModule {}
