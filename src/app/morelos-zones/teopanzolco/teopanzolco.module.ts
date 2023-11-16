import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeopanzolcoPageRoutingModule } from './teopanzolco-routing.module';

import { TeopanzolcoPage } from './teopanzolco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeopanzolcoPageRoutingModule
  ],
  declarations: [TeopanzolcoPage]
})
export class TeopanzolcoPageModule {}
