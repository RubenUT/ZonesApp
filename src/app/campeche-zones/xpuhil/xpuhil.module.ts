import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XpuhilPageRoutingModule } from './xpuhil-routing.module';

import { XpuhilPage } from './xpuhil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XpuhilPageRoutingModule
  ],
  declarations: [XpuhilPage]
})
export class XpuhilPageModule {}
