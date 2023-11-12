import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReyesPazPageRoutingModule } from './reyes-paz-routing.module';

import { ReyesPazPage } from './reyes-paz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReyesPazPageRoutingModule
  ],
  declarations: [ReyesPazPage]
})
export class ReyesPazPageModule {}
