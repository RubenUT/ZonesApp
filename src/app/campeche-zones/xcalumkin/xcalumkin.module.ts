import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XcalumkinPageRoutingModule } from './xcalumkin-routing.module';

import { XcalumkinPage } from './xcalumkin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XcalumkinPageRoutingModule
  ],
  declarations: [XcalumkinPage]
})
export class XcalumkinPageModule {}
