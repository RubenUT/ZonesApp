import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasFloresPage } from './las-flores.page';

const routes: Routes = [
  {
    path: '',
    component: LasFloresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasFloresPageRoutingModule {}
