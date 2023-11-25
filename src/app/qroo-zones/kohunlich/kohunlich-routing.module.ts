import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KohunlichPage } from './kohunlich.page';

const routes: Routes = [
  {
    path: '',
    component: KohunlichPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KohunlichPageRoutingModule {}
