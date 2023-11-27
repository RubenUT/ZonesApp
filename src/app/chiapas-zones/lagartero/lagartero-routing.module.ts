import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LagarteroPage } from './lagartero.page';

const routes: Routes = [
  {
    path: '',
    component: LagarteroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagarteroPageRoutingModule {}
