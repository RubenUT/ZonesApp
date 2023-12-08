import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IhuatzioPageRoutingModule } from './ihuatzio-routing.module';

import { IhuatzioPage } from './ihuatzio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IhuatzioPageRoutingModule
  ],
  declarations: [IhuatzioPage]
})
export class IhuatzioPageModule {}
