import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoralReformaPage } from './moral-reforma.page';

const routes: Routes = [
  {
    path: '',
    component: MoralReformaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoralReformaPageRoutingModule {}
