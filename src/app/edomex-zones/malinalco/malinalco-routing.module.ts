import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalinalcoPage } from './malinalco.page';

const routes: Routes = [
  {
    path: '',
    component: MalinalcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalinalcoPageRoutingModule {}
