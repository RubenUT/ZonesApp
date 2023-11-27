import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkePage } from './ake.page';

const routes: Routes = [
  {
    path: '',
    component: AkePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkePageRoutingModule {}
