import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcancehPageRoutingModule } from './acanceh-routing.module';

import { AcancehPage } from './acanceh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcancehPageRoutingModule
  ],
  declarations: [AcancehPage]
})
export class AcancehPageModule {}
