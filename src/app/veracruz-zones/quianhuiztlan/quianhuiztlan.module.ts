import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuianhuiztlanPageRoutingModule } from './quianhuiztlan-routing.module';

import { QuianhuiztlanPage } from './quianhuiztlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuianhuiztlanPageRoutingModule
  ],
  declarations: [QuianhuiztlanPage]
})
export class QuianhuiztlanPageModule {}
