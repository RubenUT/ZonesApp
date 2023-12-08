import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TingambatoPageRoutingModule } from './tingambato-routing.module';

import { TingambatoPage } from './tingambato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TingambatoPageRoutingModule
  ],
  declarations: [TingambatoPage]
})
export class TingambatoPageModule {}
