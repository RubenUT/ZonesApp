import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuamuxtitlanPage } from './huamuxtitlan.page';

const routes: Routes = [
  {
    path: '',
    component: HuamuxtitlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuamuxtitlanPageRoutingModule {}
