import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonampakPageRoutingModule } from './bonampak-routing.module';

import { BonampakPage } from './bonampak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonampakPageRoutingModule
  ],
  declarations: [BonampakPage]
})
export class BonampakPageModule {}
