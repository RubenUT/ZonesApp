import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabnaPage } from './labna.page';

const routes: Routes = [
  {
    path: '',
    component: LabnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabnaPageRoutingModule {}
