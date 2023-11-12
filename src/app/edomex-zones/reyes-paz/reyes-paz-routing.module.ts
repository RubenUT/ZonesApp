import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReyesPazPage } from './reyes-paz.page';

const routes: Routes = [
  {
    path: '',
    component: ReyesPazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReyesPazPageRoutingModule {}
