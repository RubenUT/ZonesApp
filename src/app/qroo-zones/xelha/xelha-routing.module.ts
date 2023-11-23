import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XelhaPage } from './xelha.page';

const routes: Routes = [
  {
    path: '',
    component: XelhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XelhaPageRoutingModule {}
