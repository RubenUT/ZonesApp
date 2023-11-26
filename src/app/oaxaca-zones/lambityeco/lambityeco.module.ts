import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LambityecoPageRoutingModule } from './lambityeco-routing.module';

import { LambityecoPage } from './lambityeco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LambityecoPageRoutingModule
  ],
  declarations: [LambityecoPage]
})
export class LambityecoPageModule {}
