import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagarteroPageRoutingModule } from './lagartero-routing.module';

import { LagarteroPage } from './lagartero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagarteroPageRoutingModule
  ],
  declarations: [LagarteroPage]
})
export class LagarteroPageModule {}
