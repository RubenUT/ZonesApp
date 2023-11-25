import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanMigueltoPageRoutingModule } from './san-miguelto-routing.module';

import { SanMigueltoPage } from './san-miguelto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanMigueltoPageRoutingModule
  ],
  declarations: [SanMigueltoPage]
})
export class SanMigueltoPageModule {}
