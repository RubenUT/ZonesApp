import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiengolaPageRoutingModule } from './guiengola-routing.module';

import { GuiengolaPage } from './guiengola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiengolaPageRoutingModule
  ],
  declarations: [GuiengolaPage]
})
export class GuiengolaPageModule {}
