import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IglesiaViejaPageRoutingModule } from './iglesia-vieja-routing.module';

import { IglesiaViejaPage } from './iglesia-vieja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IglesiaViejaPageRoutingModule
  ],
  declarations: [IglesiaViejaPage]
})
export class IglesiaViejaPageModule {}
