import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuicuilcoPage } from './cuicuilco.page';

const routes: Routes = [
  {
    path: '',
    component: CuicuilcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuicuilcoPageRoutingModule {}
