import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuachimontonesPageRoutingModule } from './guachimontones-routing.module';

import { GuachimontonesPage } from './guachimontones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuachimontonesPageRoutingModule
  ],
  declarations: [GuachimontonesPage]
})
export class GuachimontonesPageModule {}
