import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzibilchaltunPage } from './dzibilchaltun.page';

const routes: Routes = [
  {
    path: '',
    component: DzibilchaltunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzibilchaltunPageRoutingModule {}
