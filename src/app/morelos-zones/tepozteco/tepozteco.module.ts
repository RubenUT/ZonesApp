import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TepoztecoPageRoutingModule } from './tepozteco-routing.module';

import { TepoztecoPage } from './tepozteco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TepoztecoPageRoutingModule
  ],
  declarations: [TepoztecoPage]
})
export class TepoztecoPageModule {}
