import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamtocPageRoutingModule } from './tamtoc-routing.module';

import { TamtocPage } from './tamtoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamtocPageRoutingModule
  ],
  declarations: [TamtocPage]
})
export class TamtocPageModule {}
