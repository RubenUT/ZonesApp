import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasHiguerasPageRoutingModule } from './las-higueras-routing.module';

import { LasHiguerasPage } from './las-higueras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasHiguerasPageRoutingModule
  ],
  declarations: [LasHiguerasPage]
})
export class LasHiguerasPageModule {}
