import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantonaPageRoutingModule } from './cantona-routing.module';

import { CantonaPage } from './cantona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantonaPageRoutingModule
  ],
  declarations: [CantonaPage]
})
export class CantonaPageModule {}
