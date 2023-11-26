import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TepexiElViejoPageRoutingModule } from './tepexi-el-viejo-routing.module';

import { TepexiElViejoPage } from './tepexi-el-viejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TepexiElViejoPageRoutingModule
  ],
  declarations: [TepexiElViejoPage]
})
export class TepexiElViejoPageModule {}
