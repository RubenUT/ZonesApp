import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XochipalaPageRoutingModule } from './xochipala-routing.module';

import { XochipalaPage } from './xochipala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XochipalaPageRoutingModule
  ],
  declarations: [XochipalaPage]
})
export class XochipalaPageModule {}
