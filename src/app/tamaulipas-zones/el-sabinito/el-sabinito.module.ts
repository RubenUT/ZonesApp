import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElSabinitoPageRoutingModule } from './el-sabinito-routing.module';

import { ElSabinitoPage } from './el-sabinito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElSabinitoPageRoutingModule
  ],
  declarations: [ElSabinitoPage]
})
export class ElSabinitoPageModule {}
