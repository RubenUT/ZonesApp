import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcancehPage } from './acanceh.page';

const routes: Routes = [
  {
    path: '',
    component: AcancehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcancehPageRoutingModule {}
