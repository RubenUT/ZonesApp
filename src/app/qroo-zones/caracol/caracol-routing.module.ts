import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracolPage } from './caracol.page';

const routes: Routes = [
  {
    path: '',
    component: CaracolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracolPageRoutingModule {}
