import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KabahPageRoutingModule } from './kabah-routing.module';

import { KabahPage } from './kabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KabahPageRoutingModule
  ],
  declarations: [KabahPage]
})
export class KabahPageModule {}
