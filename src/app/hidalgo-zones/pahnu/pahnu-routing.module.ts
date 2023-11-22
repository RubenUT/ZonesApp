import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PahnuPage } from './pahnu.page';

const routes: Routes = [
  {
    path: '',
    component: PahnuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PahnuPageRoutingModule {}
