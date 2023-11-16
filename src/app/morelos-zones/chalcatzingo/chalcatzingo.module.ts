import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChalcatzingoPageRoutingModule } from './chalcatzingo-routing.module';

import { ChalcatzingoPage } from './chalcatzingo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChalcatzingoPageRoutingModule
  ],
  declarations: [ChalcatzingoPage]
})
export class ChalcatzingoPageModule {}
