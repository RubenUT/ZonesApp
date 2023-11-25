import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayaDelCarmenPageRoutingModule } from './playa-del-carmen-routing.module';

import { PlayaDelCarmenPage } from './playa-del-carmen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayaDelCarmenPageRoutingModule
  ],
  declarations: [PlayaDelCarmenPage]
})
export class PlayaDelCarmenPageModule {}
