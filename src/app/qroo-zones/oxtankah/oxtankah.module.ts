import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OxtankahPageRoutingModule } from './oxtankah-routing.module';

import { OxtankahPage } from './oxtankah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OxtankahPageRoutingModule
  ],
  declarations: [OxtankahPage]
})
export class OxtankahPageModule {}
