import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalconDeMoctezumaPageRoutingModule } from './balcon-de-moctezuma-routing.module';

import { BalconDeMoctezumaPage } from './balcon-de-moctezuma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalconDeMoctezumaPageRoutingModule
  ],
  declarations: [BalconDeMoctezumaPage]
})
export class BalconDeMoctezumaPageModule {}
