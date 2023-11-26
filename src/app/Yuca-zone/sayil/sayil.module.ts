import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SayilPageRoutingModule } from './sayil-routing.module';

import { SayilPage } from './sayil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SayilPageRoutingModule
  ],
  declarations: [SayilPage]
})
export class SayilPageModule {}
