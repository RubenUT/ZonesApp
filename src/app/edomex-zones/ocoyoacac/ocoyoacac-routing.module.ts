import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcoyoacacPage } from './ocoyoacac.page';

const routes: Routes = [
  {
    path: '',
    component: OcoyoacacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcoyoacacPageRoutingModule {}
