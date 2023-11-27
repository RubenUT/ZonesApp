import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzapaPageRoutingModule } from './izapa-routing.module';

import { IzapaPage } from './izapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzapaPageRoutingModule
  ],
  declarations: [IzapaPage]
})
export class IzapaPageModule {}
