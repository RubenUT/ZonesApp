import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuarentaCasasPageRoutingModule } from './cuarenta-casas-routing.module';

import { CuarentaCasasPage } from './cuarenta-casas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuarentaCasasPageRoutingModule
  ],
  declarations: [CuarentaCasasPage]
})
export class CuarentaCasasPageModule {}
