import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanMigueltoPage } from './san-miguelto.page';

const routes: Routes = [
  {
    path: '',
    component: SanMigueltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanMigueltoPageRoutingModule {}
