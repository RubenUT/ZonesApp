import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulaPage } from './tula.page';

const routes: Routes = [
  {
    path: '',
    component: TulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulaPageRoutingModule {}
