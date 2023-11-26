import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixcoacPageRoutingModule } from './mixcoac-routing.module';

import { MixcoacPage } from './mixcoac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixcoacPageRoutingModule
  ],
  declarations: [MixcoacPage]
})
export class MixcoacPageModule {}
