import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamohiPageRoutingModule } from './tamohi-routing.module';

import { TamohiPage } from './tamohi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamohiPageRoutingModule
  ],
  declarations: [TamohiPage]
})
export class TamohiPageModule {}
