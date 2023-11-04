import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChichenItzaPageRoutingModule } from './chichen-itza-routing.module';

import { ChichenItzaPage } from './chichen-itza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChichenItzaPageRoutingModule
  ],
  declarations: [ChichenItzaPage]
})
export class ChichenItzaPageModule {}
