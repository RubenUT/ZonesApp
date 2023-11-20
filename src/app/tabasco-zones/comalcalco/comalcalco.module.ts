import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComalcalcoPageRoutingModule } from './comalcalco-routing.module';

import { ComalcalcoPage } from './comalcalco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComalcalcoPageRoutingModule
  ],
  declarations: [ComalcalcoPage]
})
export class ComalcalcoPageModule {}
