import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlintepecPageRoutingModule } from './olintepec-routing.module';

import { OlintepecPage } from './olintepec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlintepecPageRoutingModule
  ],
  declarations: [OlintepecPage]
})
export class OlintepecPageModule {}
