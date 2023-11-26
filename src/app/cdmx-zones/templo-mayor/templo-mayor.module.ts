import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemploMayorPageRoutingModule } from './templo-mayor-routing.module';

import { TemploMayorPage } from './templo-mayor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemploMayorPageRoutingModule
  ],
  declarations: [TemploMayorPage]
})
export class TemploMayorPageModule {}
