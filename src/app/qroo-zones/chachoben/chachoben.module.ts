import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChachobenPageRoutingModule } from './chachoben-routing.module';

import { ChachobenPage } from './chachoben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChachobenPageRoutingModule
  ],
  declarations: [ChachobenPage]
})
export class ChachobenPageModule {}
