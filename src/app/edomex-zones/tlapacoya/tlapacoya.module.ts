import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TlapacoyaPageRoutingModule } from './tlapacoya-routing.module';

import { TlapacoyaPage } from './tlapacoya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TlapacoyaPageRoutingModule
  ],
  declarations: [TlapacoyaPage]
})
export class TlapacoyaPageModule {}
