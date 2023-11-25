import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzibanchePage } from './dzibanche.page';

const routes: Routes = [
  {
    path: '',
    component: DzibanchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzibanchePageRoutingModule {}
