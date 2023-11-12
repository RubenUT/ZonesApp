import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuexotlaPage } from './huexotla.page';

const routes: Routes = [
  {
    path: '',
    component: HuexotlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuexotlaPageRoutingModule {}
