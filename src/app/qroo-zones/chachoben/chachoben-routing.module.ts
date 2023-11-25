import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChachobenPage } from './chachoben.page';

const routes: Routes = [
  {
    path: '',
    component: ChachobenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChachobenPageRoutingModule {}
