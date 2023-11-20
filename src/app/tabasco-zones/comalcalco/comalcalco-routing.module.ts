import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComalcalcoPage } from './comalcalco.page';

const routes: Routes = [
  {
    path: '',
    component: ComalcalcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComalcalcoPageRoutingModule {}
