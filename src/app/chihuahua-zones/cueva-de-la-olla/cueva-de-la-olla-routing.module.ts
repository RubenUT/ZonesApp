import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuevaDeLaOllaPage } from './cueva-de-la-olla.page';

const routes: Routes = [
  {
    path: '',
    component: CuevaDeLaOllaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuevaDeLaOllaPageRoutingModule {}
