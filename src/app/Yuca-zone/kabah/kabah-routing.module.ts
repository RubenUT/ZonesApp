import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KabahPage } from './kabah.page';

const routes: Routes = [
  {
    path: '',
    component: KabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KabahPageRoutingModule {}
