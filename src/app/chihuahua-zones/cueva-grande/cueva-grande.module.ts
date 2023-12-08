import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuevaGrandePageRoutingModule } from './cueva-grande-routing.module';

import { CuevaGrandePage } from './cueva-grande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuevaGrandePageRoutingModule
  ],
  declarations: [CuevaGrandePage]
})
export class CuevaGrandePageModule {}
