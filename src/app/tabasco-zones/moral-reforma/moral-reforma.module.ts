import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoralReformaPageRoutingModule } from './moral-reforma-routing.module';

import { MoralReformaPage } from './moral-reforma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoralReformaPageRoutingModule
  ],
  declarations: [MoralReformaPage]
})
export class MoralReformaPageModule {}
