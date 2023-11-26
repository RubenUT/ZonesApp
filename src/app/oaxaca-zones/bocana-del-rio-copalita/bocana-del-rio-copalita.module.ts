import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocanaDelRioCopalitaPageRoutingModule } from './bocana-del-rio-copalita-routing.module';

import { BocanaDelRioCopalitaPage } from './bocana-del-rio-copalita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BocanaDelRioCopalitaPageRoutingModule
  ],
  declarations: [BocanaDelRioCopalitaPage]
})
export class BocanaDelRioCopalitaPageModule {}
