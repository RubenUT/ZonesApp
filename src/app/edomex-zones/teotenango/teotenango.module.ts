import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeotenangoPageRoutingModule } from './teotenango-routing.module';

import { TeotenangoPage } from './teotenango.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeotenangoPageRoutingModule
  ],
  declarations: [TeotenangoPage]
})
export class TeotenangoPageModule {}
