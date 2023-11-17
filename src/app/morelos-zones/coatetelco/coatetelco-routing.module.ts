import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatetelcoPage } from './coatetelco.page';

const routes: Routes = [
  {
    path: '',
    component: CoatetelcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatetelcoPageRoutingModule {}
