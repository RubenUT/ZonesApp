import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosMelonesPageRoutingModule } from './los-melones-routing.module';

import { LosMelonesPage } from './los-melones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosMelonesPageRoutingModule
  ],
  declarations: [LosMelonesPage]
})
export class LosMelonesPageModule {}
