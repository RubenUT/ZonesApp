import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChunhuhubPageRoutingModule } from './chunhuhub-routing.module';

import { ChunhuhubPage } from './chunhuhub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChunhuhubPageRoutingModule
  ],
  declarations: [ChunhuhubPage]
})
export class ChunhuhubPageModule {}
