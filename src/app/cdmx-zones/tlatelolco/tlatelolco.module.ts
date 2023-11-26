import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TlatelolcoPageRoutingModule } from './tlatelolco-routing.module';

import { TlatelolcoPage } from './tlatelolco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TlatelolcoPageRoutingModule
  ],
  declarations: [TlatelolcoPage]
})
export class TlatelolcoPageModule {}
