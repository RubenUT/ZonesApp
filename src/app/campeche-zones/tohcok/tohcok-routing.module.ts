import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TohcokPage } from './tohcok.page';

const routes: Routes = [
  {
    path: '',
    component: TohcokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TohcokPageRoutingModule {}
