import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TetzcotzingoPageRoutingModule } from './tetzcotzingo-routing.module';

import { TetzcotzingoPage } from './tetzcotzingo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TetzcotzingoPageRoutingModule
  ],
  declarations: [TetzcotzingoPage]
})
export class TetzcotzingoPageModule {}
