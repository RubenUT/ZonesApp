import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuamelupanPage } from './huamelupan.page';

const routes: Routes = [
  {
    path: '',
    component: HuamelupanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuamelupanPageRoutingModule {}
