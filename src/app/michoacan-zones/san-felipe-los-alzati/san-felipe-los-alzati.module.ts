import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanFelipeLosAlzatiPageRoutingModule } from './san-felipe-los-alzati-routing.module';

import { SanFelipeLosAlzatiPage } from './san-felipe-los-alzati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanFelipeLosAlzatiPageRoutingModule
  ],
  declarations: [SanFelipeLosAlzatiPage]
})
export class SanFelipeLosAlzatiPageModule {}
