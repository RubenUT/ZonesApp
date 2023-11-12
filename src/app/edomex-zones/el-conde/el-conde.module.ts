import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElCondePageRoutingModule } from './el-conde-routing.module';

import { ElCondePage } from './el-conde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElCondePageRoutingModule
  ],
  declarations: [ElCondePage]
})
export class ElCondePageModule {}
