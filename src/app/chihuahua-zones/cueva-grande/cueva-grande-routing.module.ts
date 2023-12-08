import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuevaGrandePage } from './cueva-grande.page';

const routes: Routes = [
  {
    path: '',
    component: CuevaGrandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuevaGrandePageRoutingModule {}
