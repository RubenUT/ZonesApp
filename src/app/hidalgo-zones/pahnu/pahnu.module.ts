import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PahnuPageRoutingModule } from './pahnu-routing.module';

import { PahnuPage } from './pahnu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PahnuPageRoutingModule
  ],
  declarations: [PahnuPage]
})
export class PahnuPageModule {}
