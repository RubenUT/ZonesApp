import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanMiguelIxtapanPageRoutingModule } from './san-miguel-ixtapan-routing.module';

import { SanMiguelIxtapanPage } from './san-miguel-ixtapan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanMiguelIxtapanPageRoutingModule
  ],
  declarations: [SanMiguelIxtapanPage]
})
export class SanMiguelIxtapanPageModule {}
