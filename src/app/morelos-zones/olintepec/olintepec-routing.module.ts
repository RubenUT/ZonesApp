import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlintepecPage } from './olintepec.page';

const routes: Routes = [
  {
    path: '',
    component: OlintepecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlintepecPageRoutingModule {}
