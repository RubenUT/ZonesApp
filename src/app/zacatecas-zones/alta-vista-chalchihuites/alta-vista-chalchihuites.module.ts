import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaVistaChalchihuitesPageRoutingModule } from './alta-vista-chalchihuites-routing.module';

import { AltaVistaChalchihuitesPage } from './alta-vista-chalchihuites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaVistaChalchihuitesPageRoutingModule
  ],
  declarations: [AltaVistaChalchihuitesPage]
})
export class AltaVistaChalchihuitesPageModule {}
