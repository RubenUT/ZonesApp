import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArroyoSecoPage } from './arroyo-seco.page';

const routes: Routes = [
  {
    path: '',
    component: ArroyoSecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArroyoSecoPageRoutingModule {}
