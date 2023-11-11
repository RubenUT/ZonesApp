import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzibilnocacPage } from './dzibilnocac.page';

const routes: Routes = [
  {
    path: '',
    component: DzibilnocacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzibilnocacPageRoutingModule {}
