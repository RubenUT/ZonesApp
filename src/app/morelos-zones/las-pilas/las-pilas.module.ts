import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasPilasPageRoutingModule } from './las-pilas-routing.module';

import { LasPilasPage } from './las-pilas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasPilasPageRoutingModule
  ],
  declarations: [LasPilasPage]
})
export class LasPilasPageModule {}
