import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TepapayecaPageRoutingModule } from './tepapayeca-routing.module';

import { TepapayecaPage } from './tepapayeca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TepapayecaPageRoutingModule
  ],
  declarations: [TepapayecaPage]
})
export class TepapayecaPageModule {}
