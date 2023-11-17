import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantaCecilaAcatitlanPageRoutingModule } from './santa-cecila-acatitlan-routing.module';

import { SantaCecilaAcatitlanPage } from './santa-cecila-acatitlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantaCecilaAcatitlanPageRoutingModule
  ],
  declarations: [SantaCecilaAcatitlanPage]
})
export class SantaCecilaAcatitlanPageModule {}
