import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenayucaLLlPageRoutingModule } from './tenayuca-l-ll-routing.module';

import { TenayucaLLlPage } from './tenayuca-l-ll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenayucaLLlPageRoutingModule
  ],
  declarations: [TenayucaLLlPage]
})
export class TenayucaLLlPageModule {}
