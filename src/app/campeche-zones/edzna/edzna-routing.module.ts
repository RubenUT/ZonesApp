import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdznaPage } from './edzna.page';

const routes: Routes = [
  {
    path: '',
    component: EdznaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdznaPageRoutingModule {}
