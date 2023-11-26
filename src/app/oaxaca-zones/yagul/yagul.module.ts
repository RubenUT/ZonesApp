import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YagulPageRoutingModule } from './yagul-routing.module';

import { YagulPage } from './yagul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YagulPageRoutingModule
  ],
  declarations: [YagulPage]
})
export class YagulPageModule {}
