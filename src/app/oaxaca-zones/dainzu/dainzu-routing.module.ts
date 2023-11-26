import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DainzuPage } from './dainzu.page';

const routes: Routes = [
  {
    path: '',
    component: DainzuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DainzuPageRoutingModule {}
