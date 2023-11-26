import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixcoacPage } from './mixcoac.page';

const routes: Routes = [
  {
    path: '',
    component: MixcoacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixcoacPageRoutingModule {}
