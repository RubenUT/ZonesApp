import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanlotenPage } from './sanloten.page';

const routes: Routes = [
  {
    path: '',
    component: SanlotenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanlotenPageRoutingModule {}
