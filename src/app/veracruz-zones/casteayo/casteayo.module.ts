import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasteayoPageRoutingModule } from './casteayo-routing.module';

import { CasteayoPage } from './casteayo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasteayoPageRoutingModule
  ],
  declarations: [CasteayoPage]
})
export class CasteayoPageModule {}
