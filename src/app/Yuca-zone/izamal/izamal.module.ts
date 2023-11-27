import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzamalPageRoutingModule } from './izamal-routing.module';

import { IzamalPage } from './izamal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzamalPageRoutingModule
  ],
  declarations: [IzamalPage]
})
export class IzamalPageModule {}
