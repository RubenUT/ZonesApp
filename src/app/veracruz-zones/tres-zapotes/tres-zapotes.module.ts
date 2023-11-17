import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresZapotesPageRoutingModule } from './tres-zapotes-routing.module';

import { TresZapotesPage } from './tres-zapotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresZapotesPageRoutingModule
  ],
  declarations: [TresZapotesPage]
})
export class TresZapotesPageModule {}
