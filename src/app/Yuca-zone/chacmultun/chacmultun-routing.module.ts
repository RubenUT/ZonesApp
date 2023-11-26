import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChacmultunPage } from './chacmultun.page';

const routes: Routes = [
  {
    path: '',
    component: ChacmultunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChacmultunPageRoutingModule {}
