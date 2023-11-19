import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaSabanaPageRoutingModule } from './la-sabana-routing.module';

import { LaSabanaPage } from './la-sabana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaSabanaPageRoutingModule
  ],
  declarations: [LaSabanaPage]
})
export class LaSabanaPageModule {}
