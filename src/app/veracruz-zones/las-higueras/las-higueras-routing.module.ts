import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasHiguerasPage } from './las-higueras.page';

const routes: Routes = [
  {
    path: '',
    component: LasHiguerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasHiguerasPageRoutingModule {}
