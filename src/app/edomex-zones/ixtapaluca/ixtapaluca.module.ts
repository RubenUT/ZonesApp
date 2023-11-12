import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IxtapalucaPageRoutingModule } from './ixtapaluca-routing.module';

import { IxtapalucaPage } from './ixtapaluca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IxtapalucaPageRoutingModule
  ],
  declarations: [IxtapalucaPage]
})
export class IxtapalucaPageModule {}
