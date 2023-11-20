import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomonaPage } from './pomona.page';

const routes: Routes = [
  {
    path: '',
    component: PomonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomonaPageRoutingModule {}
