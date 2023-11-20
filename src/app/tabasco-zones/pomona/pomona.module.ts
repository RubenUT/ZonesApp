import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomonaPageRoutingModule } from './pomona-routing.module';

import { PomonaPage } from './pomona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomonaPageRoutingModule
  ],
  declarations: [PomonaPage]
})
export class PomonaPageModule {}
