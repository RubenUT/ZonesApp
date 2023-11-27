import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenamPuentePage } from './tenam-puente.page';

const routes: Routes = [
  {
    path: '',
    component: TenamPuentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenamPuentePageRoutingModule {}
