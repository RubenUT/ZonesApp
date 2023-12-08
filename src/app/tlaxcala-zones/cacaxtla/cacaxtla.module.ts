import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CacaxtlaPageRoutingModule } from './cacaxtla-routing.module';

import { CacaxtlaPage } from './cacaxtla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CacaxtlaPageRoutingModule
  ],
  declarations: [CacaxtlaPage]
})
export class CacaxtlaPageModule {}
