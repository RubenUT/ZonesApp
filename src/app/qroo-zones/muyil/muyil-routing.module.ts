import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuyilPage } from './muyil.page';

const routes: Routes = [
  {
    path: '',
    component: MuyilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuyilPageRoutingModule {}
