import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaVentaPage } from './la-venta.page';

const routes: Routes = [
  {
    path: '',
    component: LaVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaVentaPageRoutingModule {}
