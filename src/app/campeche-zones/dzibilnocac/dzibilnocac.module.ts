import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DzibilnocacPageRoutingModule } from './dzibilnocac-routing.module';

import { DzibilnocacPage } from './dzibilnocac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DzibilnocacPageRoutingModule
  ],
  declarations: [DzibilnocacPage]
})
export class DzibilnocacPageModule {}
