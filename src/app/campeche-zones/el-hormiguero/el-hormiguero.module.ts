import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElHormigueroPageRoutingModule } from './el-hormiguero-routing.module';

import { ElHormigueroPage } from './el-hormiguero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElHormigueroPageRoutingModule
  ],
  declarations: [ElHormigueroPage]
})
export class ElHormigueroPageModule {}
