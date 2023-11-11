import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TohcokPageRoutingModule } from './tohcok-routing.module';

import { TohcokPage } from './tohcok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TohcokPageRoutingModule
  ],
  declarations: [TohcokPage]
})
export class TohcokPageModule {}
