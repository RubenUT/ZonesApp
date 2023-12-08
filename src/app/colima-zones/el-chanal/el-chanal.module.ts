import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElChanalPageRoutingModule } from './el-chanal-routing.module';

import { ElChanalPage } from './el-chanal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElChanalPageRoutingModule
  ],
  declarations: [ElChanalPage]
})
export class ElChanalPageModule {}
