import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HochobPage } from './hochob.page';

const routes: Routes = [
  {
    path: '',
    component: HochobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HochobPageRoutingModule {}
