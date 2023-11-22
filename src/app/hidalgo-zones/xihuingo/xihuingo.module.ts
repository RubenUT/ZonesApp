import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XihuingoPageRoutingModule } from './xihuingo-routing.module';

import { XihuingoPage } from './xihuingo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XihuingoPageRoutingModule
  ],
  declarations: [XihuingoPage]
})
export class XihuingoPageModule {}
