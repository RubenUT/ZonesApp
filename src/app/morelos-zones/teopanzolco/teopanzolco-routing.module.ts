import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeopanzolcoPage } from './teopanzolco.page';

const routes: Routes = [
  {
    path: '',
    component: TeopanzolcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeopanzolcoPageRoutingModule {}
