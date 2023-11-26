import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZaachilaPage } from './zaachila.page';

const routes: Routes = [
  {
    path: '',
    component: ZaachilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZaachilaPageRoutingModule {}
