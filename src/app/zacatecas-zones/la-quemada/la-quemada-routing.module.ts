import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaQuemadaPage } from './la-quemada.page';

const routes: Routes = [
  {
    path: '',
    component: LaQuemadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaQuemadaPageRoutingModule {}
