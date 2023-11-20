import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalpasitoPageRoutingModule } from './malpasito-routing.module';

import { MalpasitoPage } from './malpasito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalpasitoPageRoutingModule
  ],
  declarations: [MalpasitoPage]
})
export class MalpasitoPageModule {}
