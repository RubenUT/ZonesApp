import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TepoztecoPage } from './tepozteco.page';

const routes: Routes = [
  {
    path: '',
    component: TepoztecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TepoztecoPageRoutingModule {}
