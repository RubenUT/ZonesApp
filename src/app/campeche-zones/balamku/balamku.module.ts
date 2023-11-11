import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalamkuPageRoutingModule } from './balamku-routing.module';

import { BalamkuPage } from './balamku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalamkuPageRoutingModule
  ],
  declarations: [BalamkuPage]
})
export class BalamkuPageModule {}
