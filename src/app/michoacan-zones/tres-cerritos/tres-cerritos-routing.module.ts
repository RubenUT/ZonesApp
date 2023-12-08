import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TresCerritosPage } from './tres-cerritos.page';

const routes: Routes = [
  {
    path: '',
    component: TresCerritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresCerritosPageRoutingModule {}
