import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatetelcoPageRoutingModule } from './coatetelco-routing.module';

import { CoatetelcoPage } from './coatetelco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatetelcoPageRoutingModule
  ],
  declarations: [CoatetelcoPage]
})
export class CoatetelcoPageModule {}
