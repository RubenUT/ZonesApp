import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EkBalamPage } from './ek-balam.page';

const routes: Routes = [
  {
    path: '',
    component: EkBalamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EkBalamPageRoutingModule {}
