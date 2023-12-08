import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresCerritosPageRoutingModule } from './tres-cerritos-routing.module';

import { TresCerritosPage } from './tres-cerritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresCerritosPageRoutingModule
  ],
  declarations: [TresCerritosPage]
})
export class TresCerritosPageModule {}
