import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanroxtaPageRoutingModule } from './sanroxta-routing.module';

import { SanroxtaPage } from './sanroxta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanroxtaPageRoutingModule
  ],
  declarations: [SanroxtaPage]
})
export class SanroxtaPageModule {}
