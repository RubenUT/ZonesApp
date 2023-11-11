import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecanPage } from './becan.page';

const routes: Routes = [
  {
    path: '',
    component: BecanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecanPageRoutingModule {}
