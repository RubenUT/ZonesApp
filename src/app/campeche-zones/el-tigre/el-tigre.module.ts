import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElTigrePageRoutingModule } from './el-tigre-routing.module';

import { ElTigrePage } from './el-tigre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElTigrePageRoutingModule
  ],
  declarations: [ElTigrePage]
})
export class ElTigrePageModule {}
