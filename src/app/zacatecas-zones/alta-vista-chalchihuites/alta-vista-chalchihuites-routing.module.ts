import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaVistaChalchihuitesPage } from './alta-vista-chalchihuites.page';

const routes: Routes = [
  {
    path: '',
    component: AltaVistaChalchihuitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaVistaChalchihuitesPageRoutingModule {}
