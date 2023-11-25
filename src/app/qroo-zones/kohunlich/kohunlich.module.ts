import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KohunlichPageRoutingModule } from './kohunlich-routing.module';

import { KohunlichPage } from './kohunlich.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KohunlichPageRoutingModule
  ],
  declarations: [KohunlichPage]
})
export class KohunlichPageModule {}
