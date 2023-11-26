import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OxkintokPageRoutingModule } from './oxkintok-routing.module';

import { OxkintokPage } from './oxkintok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OxkintokPageRoutingModule
  ],
  declarations: [OxkintokPage]
})
export class OxkintokPageModule {}
