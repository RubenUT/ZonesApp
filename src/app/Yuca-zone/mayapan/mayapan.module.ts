import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayapanPageRoutingModule } from './mayapan-routing.module';

import { MayapanPage } from './mayapan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayapanPageRoutingModule
  ],
  declarations: [MayapanPage]
})
export class MayapanPageModule {}
