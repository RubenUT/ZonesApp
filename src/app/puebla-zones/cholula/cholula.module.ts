import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CholulaPageRoutingModule } from './cholula-routing.module';

import { CholulaPage } from './cholula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CholulaPageRoutingModule
  ],
  declarations: [CholulaPage]
})
export class CholulaPageModule {}
