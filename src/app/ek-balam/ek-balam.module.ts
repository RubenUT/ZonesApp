import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EkBalamPageRoutingModule } from './ek-balam-routing.module';

import { EkBalamPage } from './ek-balam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EkBalamPageRoutingModule
  ],
  declarations: [EkBalamPage]
})
export class EkBalamPageModule {}
