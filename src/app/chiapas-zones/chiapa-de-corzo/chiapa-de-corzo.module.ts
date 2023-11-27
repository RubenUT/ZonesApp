import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiapaDeCorzoPageRoutingModule } from './chiapa-de-corzo-routing.module';

import { ChiapaDeCorzoPage } from './chiapa-de-corzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiapaDeCorzoPageRoutingModule
  ],
  declarations: [ChiapaDeCorzoPage]
})
export class ChiapaDeCorzoPageModule {}
