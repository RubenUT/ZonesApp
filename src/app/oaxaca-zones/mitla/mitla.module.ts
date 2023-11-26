import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitlaPageRoutingModule } from './mitla-routing.module';

import { MitlaPage } from './mitla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitlaPageRoutingModule
  ],
  declarations: [MitlaPage]
})
export class MitlaPageModule {}
