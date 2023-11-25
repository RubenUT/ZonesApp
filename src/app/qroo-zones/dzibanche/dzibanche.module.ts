import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DzibanchePageRoutingModule } from './dzibanche-routing.module';

import { DzibanchePage } from './dzibanche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DzibanchePageRoutingModule
  ],
  declarations: [DzibanchePage]
})
export class DzibanchePageModule {}
