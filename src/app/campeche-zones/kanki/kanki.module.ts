import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KankiPageRoutingModule } from './kanki-routing.module';

import { KankiPage } from './kanki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KankiPageRoutingModule
  ],
  declarations: [KankiPage]
})
export class KankiPageModule {}
