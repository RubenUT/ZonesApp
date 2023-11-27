import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalenquePageRoutingModule } from './palenque-routing.module';

import { PalenquePage } from './palenque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalenquePageRoutingModule
  ],
  declarations: [PalenquePage]
})
export class PalenquePageModule {}
