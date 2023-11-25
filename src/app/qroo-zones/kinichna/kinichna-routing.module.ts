import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinichnaPage } from './kinichna.page';

const routes: Routes = [
  {
    path: '',
    component: KinichnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinichnaPageRoutingModule {}
