import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitlaPage } from './mitla.page';

const routes: Routes = [
  {
    path: '',
    component: MitlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitlaPageRoutingModule {}
