import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaCampanaPageRoutingModule } from './la-campana-routing.module';

import { LaCampanaPage } from './la-campana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaCampanaPageRoutingModule
  ],
  declarations: [LaCampanaPage]
})
export class LaCampanaPageModule {}
