import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaQuemadaPageRoutingModule } from './la-quemada-routing.module';

import { LaQuemadaPage } from './la-quemada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaQuemadaPageRoutingModule
  ],
  declarations: [LaQuemadaPage]
})
export class LaQuemadaPageModule {}
