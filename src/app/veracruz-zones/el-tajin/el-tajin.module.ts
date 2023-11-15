import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElTajinPageRoutingModule } from './el-tajin-routing.module';

import { ElTajinPage } from './el-tajin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElTajinPageRoutingModule
  ],
  declarations: [ElTajinPage]
})
export class ElTajinPageModule {}
