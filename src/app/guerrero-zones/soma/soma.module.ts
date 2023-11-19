import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomaPageRoutingModule } from './soma-routing.module';

import { SomaPage } from './soma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomaPageRoutingModule
  ],
  declarations: [SomaPage]
})
export class SomaPageModule {}
