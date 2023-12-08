import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuapocaPage } from './huapoca.page';

const routes: Routes = [
  {
    path: '',
    component: HuapocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuapocaPageRoutingModule {}
