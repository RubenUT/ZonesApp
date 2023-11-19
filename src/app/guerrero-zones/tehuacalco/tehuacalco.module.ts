import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TehuacalcoPageRoutingModule } from './tehuacalco-routing.module';

import { TehuacalcoPage } from './tehuacalco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TehuacalcoPageRoutingModule
  ],
  declarations: [TehuacalcoPage]
})
export class TehuacalcoPageModule {}
