import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzamalPage } from './izamal.page';

const routes: Routes = [
  {
    path: '',
    component: IzamalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzamalPageRoutingModule {}
