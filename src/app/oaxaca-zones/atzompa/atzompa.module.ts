import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtzompaPageRoutingModule } from './atzompa-routing.module';

import { AtzompaPage } from './atzompa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtzompaPageRoutingModule
  ],
  declarations: [AtzompaPage]
})
export class AtzompaPageModule {}
