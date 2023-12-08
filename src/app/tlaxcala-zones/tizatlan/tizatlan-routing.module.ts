import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TizatlanPage } from './tizatlan.page';

const routes: Routes = [
  {
    path: '',
    component: TizatlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TizatlanPageRoutingModule {}
