import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuicuilcoPageRoutingModule } from './cuicuilco-routing.module';

import { CuicuilcoPage } from './cuicuilco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuicuilcoPageRoutingModule
  ],
  declarations: [CuicuilcoPage]
})
export class CuicuilcoPageModule {}
