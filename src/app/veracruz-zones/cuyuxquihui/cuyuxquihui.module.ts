import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuyuxquihuiPageRoutingModule } from './cuyuxquihui-routing.module';

import { CuyuxquihuiPage } from './cuyuxquihui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuyuxquihuiPageRoutingModule
  ],
  declarations: [CuyuxquihuiPage]
})
export class CuyuxquihuiPageModule {}
