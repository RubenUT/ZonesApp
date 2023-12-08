import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerroDeLasVentanasPageRoutingModule } from './cerro-de-las-ventanas-routing.module';

import { CerroDeLasVentanasPage } from './cerro-de-las-ventanas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerroDeLasVentanasPageRoutingModule
  ],
  declarations: [CerroDeLasVentanasPage]
})
export class CerroDeLasVentanasPageModule {}
