import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuandacareoLaNopaleraPage } from './huandacareo-la-nopalera.page';

const routes: Routes = [
  {
    path: '',
    component: HuandacareoLaNopaleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuandacareoLaNopaleraPageRoutingModule {}
