import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IxtepetePageRoutingModule } from './ixtepete-routing.module';

import { IxtepetePage } from './ixtepete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IxtepetePageRoutingModule
  ],
  declarations: [IxtepetePage]
})
export class IxtepetePageModule {}
