import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeraltaPage } from './peralta.page';

const routes: Routes = [
  {
    path: '',
    component: PeraltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeraltaPageRoutingModule {}
