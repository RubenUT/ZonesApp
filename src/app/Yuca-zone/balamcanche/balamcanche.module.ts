import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalamcanchePageRoutingModule } from './balamcanche-routing.module';

import { BalamcanchePage } from './balamcanche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalamcanchePageRoutingModule
  ],
  declarations: [BalamcanchePage]
})
export class BalamcanchePageModule {}
