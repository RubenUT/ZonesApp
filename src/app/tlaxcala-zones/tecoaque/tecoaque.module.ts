import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecoaquePageRoutingModule } from './tecoaque-routing.module';

import { TecoaquePage } from './tecoaque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecoaquePageRoutingModule
  ],
  declarations: [TecoaquePage]
})
export class TecoaquePageModule {}
