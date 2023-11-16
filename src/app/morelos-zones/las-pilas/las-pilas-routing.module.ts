import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasPilasPage } from './las-pilas.page';

const routes: Routes = [
  {
    path: '',
    component: LasPilasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasPilasPageRoutingModule {}
