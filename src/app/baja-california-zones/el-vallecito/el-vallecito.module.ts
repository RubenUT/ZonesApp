import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElVallecitoPageRoutingModule } from './el-vallecito-routing.module';

import { ElVallecitoPage } from './el-vallecito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElVallecitoPageRoutingModule
  ],
  declarations: [ElVallecitoPage]
})
export class ElVallecitoPageModule {}
