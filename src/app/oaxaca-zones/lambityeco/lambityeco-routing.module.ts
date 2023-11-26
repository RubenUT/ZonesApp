import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LambityecoPage } from './lambityeco.page';

const routes: Routes = [
  {
    path: '',
    component: LambityecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LambityecoPageRoutingModule {}
