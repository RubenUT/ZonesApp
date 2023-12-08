import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TzintzuntzanPageRoutingModule } from './tzintzuntzan-routing.module';

import { TzintzuntzanPage } from './tzintzuntzan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TzintzuntzanPageRoutingModule
  ],
  declarations: [TzintzuntzanPage]
})
export class TzintzuntzanPageModule {}
