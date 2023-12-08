import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeraltaPageRoutingModule } from './peralta-routing.module';

import { PeraltaPage } from './peralta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeraltaPageRoutingModule
  ],
  declarations: [PeraltaPage]
})
export class PeraltaPageModule {}
