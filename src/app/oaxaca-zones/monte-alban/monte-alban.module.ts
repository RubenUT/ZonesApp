import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonteAlbanPageRoutingModule } from './monte-alban-routing.module';

import { MonteAlbanPage } from './monte-alban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonteAlbanPageRoutingModule
  ],
  declarations: [MonteAlbanPage]
})
export class MonteAlbanPageModule {}
