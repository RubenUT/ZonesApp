import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DainzuPageRoutingModule } from './dainzu-routing.module';

import { DainzuPage } from './dainzu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DainzuPageRoutingModule
  ],
  declarations: [DainzuPage]
})
export class DainzuPageModule {}
