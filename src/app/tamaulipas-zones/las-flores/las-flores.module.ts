import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasFloresPageRoutingModule } from './las-flores-routing.module';

import { LasFloresPage } from './las-flores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasFloresPageRoutingModule
  ],
  declarations: [LasFloresPage]
})
export class LasFloresPageModule {}
