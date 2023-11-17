import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeotihuacanPageRoutingModule } from './teotihuacan-routing.module';

import { TeotihuacanPage } from './teotihuacan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeotihuacanPageRoutingModule
  ],
  declarations: [TeotihuacanPage]
})
export class TeotihuacanPageModule {}
