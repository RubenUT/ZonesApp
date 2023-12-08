import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuevaDeLaOllaPageRoutingModule } from './cueva-de-la-olla-routing.module';

import { CuevaDeLaOllaPage } from './cueva-de-la-olla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuevaDeLaOllaPageRoutingModule
  ],
  declarations: [CuevaDeLaOllaPage]
})
export class CuevaDeLaOllaPageModule {}
