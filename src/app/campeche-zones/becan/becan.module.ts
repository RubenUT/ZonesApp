import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecanPageRoutingModule } from './becan-routing.module';

import { BecanPage } from './becan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecanPageRoutingModule
  ],
  declarations: [BecanPage]
})
export class BecanPageModule {}
