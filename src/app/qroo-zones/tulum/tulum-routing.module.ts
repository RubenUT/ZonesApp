import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulumPage } from './tulum.page';

const routes: Routes = [
  {
    path: '',
    component: TulumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulumPageRoutingModule {}
