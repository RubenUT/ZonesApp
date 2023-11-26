import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UxmalPage } from './uxmal.page';

const routes: Routes = [
  {
    path: '',
    component: UxmalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UxmalPageRoutingModule {}
