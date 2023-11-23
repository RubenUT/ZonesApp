import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanGervasioPage } from './san-gervasio.page';

const routes: Routes = [
  {
    path: '',
    component: SanGervasioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanGervasioPageRoutingModule {}
