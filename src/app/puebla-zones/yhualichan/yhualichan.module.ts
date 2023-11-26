import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YhualichanPageRoutingModule } from './yhualichan-routing.module';

import { YhualichanPage } from './yhualichan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YhualichanPageRoutingModule
  ],
  declarations: [YhualichanPage]
})
export class YhualichanPageModule {}
