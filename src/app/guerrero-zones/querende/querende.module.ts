import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuerendePageRoutingModule } from './querende-routing.module';

import { QuerendePage } from './querende.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuerendePageRoutingModule
  ],
  declarations: [QuerendePage]
})
export class QuerendePageModule {}
