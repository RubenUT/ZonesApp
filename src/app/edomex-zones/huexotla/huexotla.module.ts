import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuexotlaPageRoutingModule } from './huexotla-routing.module';

import { HuexotlaPage } from './huexotla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuexotlaPageRoutingModule
  ],
  declarations: [HuexotlaPage]
})
export class HuexotlaPageModule {}
