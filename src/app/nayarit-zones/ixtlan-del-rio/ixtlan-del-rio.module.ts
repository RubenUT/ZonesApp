import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IxtlanDelRioPageRoutingModule } from './ixtlan-del-rio-routing.module';

import { IxtlanDelRioPage } from './ixtlan-del-rio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IxtlanDelRioPageRoutingModule
  ],
  declarations: [IxtlanDelRioPage]
})
export class IxtlanDelRioPageModule {}
