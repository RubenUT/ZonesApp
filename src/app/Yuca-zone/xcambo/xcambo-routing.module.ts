import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XcamboPage } from './xcambo.page';

const routes: Routes = [
  {
    path: '',
    component: XcamboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XcamboPageRoutingModule {}
