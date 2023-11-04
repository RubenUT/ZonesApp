import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkePageRoutingModule } from './ake-routing.module';

import { AkePage } from './ake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkePageRoutingModule
  ],
  declarations: [AkePage]
})
export class AkePageModule {}
