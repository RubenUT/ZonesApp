import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanadaDeLaVirgenPageRoutingModule } from './canada-de-la-virgen-routing.module';

import { CanadaDeLaVirgenPage } from './canada-de-la-virgen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanadaDeLaVirgenPageRoutingModule
  ],
  declarations: [CanadaDeLaVirgenPage]
})
export class CanadaDeLaVirgenPageModule {}
