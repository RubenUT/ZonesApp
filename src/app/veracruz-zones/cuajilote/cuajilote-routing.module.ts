import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuajilotePage } from './cuajilote.page';

const routes: Routes = [
  {
    path: '',
    component: CuajilotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuajilotePageRoutingModule {}
