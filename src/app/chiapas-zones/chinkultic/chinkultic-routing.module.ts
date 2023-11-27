import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinkulticPage } from './chinkultic.page';

const routes: Routes = [
  {
    path: '',
    component: ChinkulticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinkulticPageRoutingModule {}
