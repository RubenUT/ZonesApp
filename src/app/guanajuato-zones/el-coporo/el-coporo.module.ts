import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElCoporoPageRoutingModule } from './el-coporo-routing.module';

import { ElCoporoPage } from './el-coporo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElCoporoPageRoutingModule
  ],
  declarations: [ElCoporoPage]
})
export class ElCoporoPageModule {}
