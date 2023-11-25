import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuyilPageRoutingModule } from './muyil-routing.module';

import { MuyilPage } from './muyil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuyilPageRoutingModule
  ],
  declarations: [MuyilPage]
})
export class MuyilPageModule {}
