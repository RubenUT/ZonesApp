import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlazuelasPageRoutingModule } from './plazuelas-routing.module';

import { PlazuelasPage } from './plazuelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlazuelasPageRoutingModule
  ],
  declarations: [PlazuelasPage]
})
export class PlazuelasPageModule {}
