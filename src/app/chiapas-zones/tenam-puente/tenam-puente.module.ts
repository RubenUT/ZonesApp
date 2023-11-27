import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenamPuentePageRoutingModule } from './tenam-puente-routing.module';

import { TenamPuentePage } from './tenam-puente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenamPuentePageRoutingModule
  ],
  declarations: [TenamPuentePage]
})
export class TenamPuentePageModule {}
