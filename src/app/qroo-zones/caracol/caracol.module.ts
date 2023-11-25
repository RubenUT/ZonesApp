import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracolPageRoutingModule } from './caracol-routing.module';

import { CaracolPage } from './caracol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracolPageRoutingModule
  ],
  declarations: [CaracolPage]
})
export class CaracolPageModule {}
