import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocuilaPageRoutingModule } from './tocuila-routing.module';

import { TocuilaPage } from './tocuila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocuilaPageRoutingModule
  ],
  declarations: [TocuilaPage]
})
export class TocuilaPageModule {}
