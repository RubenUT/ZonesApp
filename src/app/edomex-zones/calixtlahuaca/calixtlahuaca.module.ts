import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalixtlahuacaPageRoutingModule } from './calixtlahuaca-routing.module';

import { CalixtlahuacaPage } from './calixtlahuaca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalixtlahuacaPageRoutingModule
  ],
  declarations: [CalixtlahuacaPage]
})
export class CalixtlahuacaPageModule {}
