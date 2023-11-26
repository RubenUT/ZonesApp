import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoltunPage } from './loltun.page';

const routes: Routes = [
  {
    path: '',
    component: LoltunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoltunPageRoutingModule {}
