import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanGervasioPageRoutingModule } from './san-gervasio-routing.module';

import { SanGervasioPage } from './san-gervasio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanGervasioPageRoutingModule
  ],
  declarations: [SanGervasioPage]
})
export class SanGervasioPageModule {}
