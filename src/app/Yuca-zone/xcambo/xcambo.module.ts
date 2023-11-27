import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XcamboPageRoutingModule } from './xcambo-routing.module';

import { XcamboPage } from './xcambo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XcamboPageRoutingModule
  ],
  declarations: [XcamboPage]
})
export class XcamboPageModule {}
