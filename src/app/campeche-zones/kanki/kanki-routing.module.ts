import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KankiPage } from './kanki.page';

const routes: Routes = [
  {
    path: '',
    component: KankiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KankiPageRoutingModule {}
