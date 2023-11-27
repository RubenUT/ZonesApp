import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiapaDeCorzoPage } from './chiapa-de-corzo.page';

const routes: Routes = [
  {
    path: '',
    component: ChiapaDeCorzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiapaDeCorzoPageRoutingModule {}
