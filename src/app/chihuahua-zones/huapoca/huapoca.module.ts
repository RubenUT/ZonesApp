import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuapocaPageRoutingModule } from './huapoca-routing.module';

import { HuapocaPage } from './huapoca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuapocaPageRoutingModule
  ],
  declarations: [HuapocaPage]
})
export class HuapocaPageModule {}
