import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaPaleontologicaRinconColoradoPageRoutingModule } from './zona-paleontologica-rincon-colorado-routing.module';

import { ZonaPaleontologicaRinconColoradoPage } from './zona-paleontologica-rincon-colorado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaPaleontologicaRinconColoradoPageRoutingModule
  ],
  declarations: [ZonaPaleontologicaRinconColoradoPage]
})
export class ZonaPaleontologicaRinconColoradoPageModule {}
