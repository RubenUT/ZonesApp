import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinkulticPageRoutingModule } from './chinkultic-routing.module';

import { ChinkulticPage } from './chinkultic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinkulticPageRoutingModule
  ],
  declarations: [ChinkulticPage]
})
export class ChinkulticPageModule {}
