import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChimalhuacanPageRoutingModule } from './chimalhuacan-routing.module';

import { ChimalhuacanPage } from './chimalhuacan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChimalhuacanPageRoutingModule
  ],
  declarations: [ChimalhuacanPage]
})
export class ChimalhuacanPageModule {}
