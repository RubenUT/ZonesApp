import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicannaPage } from './chicanna.page';

const routes: Routes = [
  {
    path: '',
    component: ChicannaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChicannaPageRoutingModule {}
