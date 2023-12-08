import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamohiPage } from './tamohi.page';

const routes: Routes = [
  {
    path: '',
    component: TamohiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamohiPageRoutingModule {}
