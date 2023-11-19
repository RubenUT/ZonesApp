import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosTepoltzisPage } from './los-tepoltzis.page';

const routes: Routes = [
  {
    path: '',
    component: LosTepoltzisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosTepoltzisPageRoutingModule {}
