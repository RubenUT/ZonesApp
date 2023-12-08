import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TizatlanPageRoutingModule } from './tizatlan-routing.module';

import { TizatlanPage } from './tizatlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TizatlanPageRoutingModule
  ],
  declarations: [TizatlanPage]
})
export class TizatlanPageModule {}
