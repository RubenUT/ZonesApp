import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalicaPageRoutingModule } from './calica-routing.module';

import { CalicaPage } from './calica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalicaPageRoutingModule
  ],
  declarations: [CalicaPage]
})
export class CalicaPageModule {}
