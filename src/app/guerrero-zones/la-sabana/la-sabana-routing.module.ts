import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaSabanaPage } from './la-sabana.page';

const routes: Routes = [
  {
    path: '',
    component: LaSabanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaSabanaPageRoutingModule {}
