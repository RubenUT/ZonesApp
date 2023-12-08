import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamtocPage } from './tamtoc.page';

const routes: Routes = [
  {
    path: '',
    component: TamtocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamtocPageRoutingModule {}
