import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZaachilaPageRoutingModule } from './zaachila-routing.module';

import { ZaachilaPage } from './zaachila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZaachilaPageRoutingModule
  ],
  declarations: [ZaachilaPage]
})
export class ZaachilaPageModule {}
