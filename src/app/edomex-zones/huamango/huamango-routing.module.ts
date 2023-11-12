import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuamangoPage } from './huamango.page';

const routes: Routes = [
  {
    path: '',
    component: HuamangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuamangoPageRoutingModule {}
