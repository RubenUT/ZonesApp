import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChunhuhubPage } from './chunhuhub.page';

const routes: Routes = [
  {
    path: '',
    component: ChunhuhubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChunhuhubPageRoutingModule {}
