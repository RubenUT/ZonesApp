import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquimePageRoutingModule } from './paquime-routing.module';

import { PaquimePage } from './paquime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquimePageRoutingModule
  ],
  declarations: [PaquimePage]
})
export class PaquimePageModule {}
