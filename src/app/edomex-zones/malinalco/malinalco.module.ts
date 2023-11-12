import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalinalcoPageRoutingModule } from './malinalco-routing.module';

import { MalinalcoPage } from './malinalco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalinalcoPageRoutingModule
  ],
  declarations: [MalinalcoPage]
})
export class MalinalcoPageModule {}
