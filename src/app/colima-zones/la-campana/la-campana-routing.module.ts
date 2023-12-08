import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaCampanaPage } from './la-campana.page';

const routes: Routes = [
  {
    path: '',
    component: LaCampanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaCampanaPageRoutingModule {}
