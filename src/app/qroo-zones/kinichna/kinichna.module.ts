import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KinichnaPageRoutingModule } from './kinichna-routing.module';

import { KinichnaPage } from './kinichna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KinichnaPageRoutingModule
  ],
  declarations: [KinichnaPage]
})
export class KinichnaPageModule {}
