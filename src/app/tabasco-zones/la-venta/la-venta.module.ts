import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaVentaPageRoutingModule } from './la-venta-routing.module';

import { LaVentaPage } from './la-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaVentaPageRoutingModule
  ],
  declarations: [LaVentaPage]
})
export class LaVentaPageModule {}
