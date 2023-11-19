import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IxcateopanPageRoutingModule } from './ixcateopan-routing.module';

import { IxcateopanPage } from './ixcateopan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IxcateopanPageRoutingModule
  ],
  declarations: [IxcateopanPage]
})
export class IxcateopanPageModule {}
