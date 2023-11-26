import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UxmalPageRoutingModule } from './uxmal-routing.module';

import { UxmalPage } from './uxmal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UxmalPageRoutingModule
  ],
  declarations: [UxmalPage]
})
export class UxmalPageModule {}
