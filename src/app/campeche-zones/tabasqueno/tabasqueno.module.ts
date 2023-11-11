import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabasquenoPageRoutingModule } from './tabasqueno-routing.module';

import { TabasquenoPage } from './tabasqueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabasquenoPageRoutingModule
  ],
  declarations: [TabasquenoPage]
})
export class TabasquenoPageModule {}
