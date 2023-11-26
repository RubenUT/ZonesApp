import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonteAlbanPage } from './monte-alban.page';

const routes: Routes = [
  {
    path: '',
    component: MonteAlbanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonteAlbanPageRoutingModule {}
