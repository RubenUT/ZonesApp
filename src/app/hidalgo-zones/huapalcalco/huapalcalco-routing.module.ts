import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuapalcalcoPage } from './huapalcalco.page';

const routes: Routes = [
  {
    path: '',
    component: HuapalcalcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuapalcalcoPageRoutingModule {}
