import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToninaPageRoutingModule } from './tonina-routing.module';

import { ToninaPage } from './tonina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToninaPageRoutingModule
  ],
  declarations: [ToninaPage]
})
export class ToninaPageModule {}
