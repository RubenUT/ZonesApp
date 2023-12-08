import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SierraDeSanFranciscoPageRoutingModule } from './sierra-de-san-francisco-routing.module';

import { SierraDeSanFranciscoPage } from './sierra-de-san-francisco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SierraDeSanFranciscoPageRoutingModule
  ],
  declarations: [SierraDeSanFranciscoPage]
})
export class SierraDeSanFranciscoPageModule {}
