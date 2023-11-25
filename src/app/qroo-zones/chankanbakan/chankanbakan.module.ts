import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChankanbakanPageRoutingModule } from './chankanbakan-routing.module';

import { ChankanbakanPage } from './chankanbakan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChankanbakanPageRoutingModule
  ],
  declarations: [ChankanbakanPage]
})
export class ChankanbakanPageModule {}
