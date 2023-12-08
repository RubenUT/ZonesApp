import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuarentaCasasPage } from './cuarenta-casas.page';

const routes: Routes = [
  {
    path: '',
    component: CuarentaCasasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuarentaCasasPageRoutingModule {}
