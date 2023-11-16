import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YautepecPage } from './yautepec.page';

const routes: Routes = [
  {
    path: '',
    component: YautepecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YautepecPageRoutingModule {}
