import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElMecoPageRoutingModule } from './el-meco-routing.module';

import { ElMecoPage } from './el-meco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElMecoPageRoutingModule
  ],
  declarations: [ElMecoPage]
})
export class ElMecoPageModule {}
