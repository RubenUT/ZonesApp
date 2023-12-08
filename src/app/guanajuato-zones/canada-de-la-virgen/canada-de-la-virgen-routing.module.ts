import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanadaDeLaVirgenPage } from './canada-de-la-virgen.page';

const routes: Routes = [
  {
    path: '',
    component: CanadaDeLaVirgenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanadaDeLaVirgenPageRoutingModule {}
