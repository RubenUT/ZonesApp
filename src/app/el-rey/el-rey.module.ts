import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElReyPageRoutingModule } from './el-rey-routing.module';

import { ElReyPage } from './el-rey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElReyPageRoutingModule
  ],
  declarations: [ElReyPage]
})
export class ElReyPageModule {}
