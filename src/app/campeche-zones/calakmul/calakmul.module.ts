import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalakmulPageRoutingModule } from './calakmul-routing.module';

import { CalakmulPage } from './calakmul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalakmulPageRoutingModule
  ],
  declarations: [CalakmulPage]
})
export class CalakmulPageModule {}
