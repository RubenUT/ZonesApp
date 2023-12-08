import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlazuelasPage } from './plazuelas.page';

const routes: Routes = [
  {
    path: '',
    component: PlazuelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlazuelasPageRoutingModule {}
