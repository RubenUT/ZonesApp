import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabnaPageRoutingModule } from './labna-routing.module';

import { LabnaPage } from './labna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabnaPageRoutingModule
  ],
  declarations: [LabnaPage]
})
export class LabnaPageModule {}
