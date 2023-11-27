import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToninaPage } from './tonina.page';

const routes: Routes = [
  {
    path: '',
    component: ToninaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToninaPageRoutingModule {}
