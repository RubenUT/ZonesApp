import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalamkuPage } from './balamku.page';

const routes: Routes = [
  {
    path: '',
    component: BalamkuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalamkuPageRoutingModule {}
