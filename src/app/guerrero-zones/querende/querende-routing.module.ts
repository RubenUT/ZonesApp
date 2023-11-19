import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuerendePage } from './querende.page';

const routes: Routes = [
  {
    path: '',
    component: QuerendePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuerendePageRoutingModule {}
