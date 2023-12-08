import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuandacareoLaNopaleraPageRoutingModule } from './huandacareo-la-nopalera-routing.module';

import { HuandacareoLaNopaleraPage } from './huandacareo-la-nopalera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuandacareoLaNopaleraPageRoutingModule
  ],
  declarations: [HuandacareoLaNopaleraPage]
})
export class HuandacareoLaNopaleraPageModule {}
