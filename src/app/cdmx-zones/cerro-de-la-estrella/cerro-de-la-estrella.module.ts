import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerroDeLaEstrellaPageRoutingModule } from './cerro-de-la-estrella-routing.module';

import { CerroDeLaEstrellaPage } from './cerro-de-la-estrella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerroDeLaEstrellaPageRoutingModule
  ],
  declarations: [CerroDeLaEstrellaPage]
})
export class CerroDeLaEstrellaPageModule {}
