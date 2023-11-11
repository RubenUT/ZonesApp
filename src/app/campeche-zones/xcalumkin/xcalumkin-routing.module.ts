import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XcalumkinPage } from './xcalumkin.page';

const routes: Routes = [
  {
    path: '',
    component: XcalumkinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XcalumkinPageRoutingModule {}
