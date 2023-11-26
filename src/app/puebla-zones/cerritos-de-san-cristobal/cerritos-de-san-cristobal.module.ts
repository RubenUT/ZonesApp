import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerritosDeSanCristobalPageRoutingModule } from './cerritos-de-san-cristobal-routing.module';

import { CerritosDeSanCristobalPage } from './cerritos-de-san-cristobal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerritosDeSanCristobalPageRoutingModule
  ],
  declarations: [CerritosDeSanCristobalPage]
})
export class CerritosDeSanCristobalPageModule {}
