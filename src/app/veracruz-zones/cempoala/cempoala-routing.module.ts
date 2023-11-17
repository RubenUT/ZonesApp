import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CempoalaPage } from './cempoala.page';

const routes: Routes = [
  {
    path: '',
    component: CempoalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CempoalaPageRoutingModule {}
