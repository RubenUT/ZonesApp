import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChimalhuacanPage } from './chimalhuacan.page';

const routes: Routes = [
  {
    path: '',
    component: ChimalhuacanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChimalhuacanPageRoutingModule {}
