import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XcaretPageRoutingModule } from './xcaret-routing.module';

import { XcaretPage } from './xcaret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XcaretPageRoutingModule
  ],
  declarations: [XcaretPage]
})
export class XcaretPageModule {}
