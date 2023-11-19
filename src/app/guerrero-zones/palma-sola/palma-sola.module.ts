import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalmaSolaPageRoutingModule } from './palma-sola-routing.module';

import { PalmaSolaPage } from './palma-sola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalmaSolaPageRoutingModule
  ],
  declarations: [PalmaSolaPage]
})
export class PalmaSolaPageModule {}
