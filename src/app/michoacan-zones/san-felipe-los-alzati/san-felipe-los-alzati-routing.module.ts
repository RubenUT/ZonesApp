import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanFelipeLosAlzatiPage } from './san-felipe-los-alzati.page';

const routes: Routes = [
  {
    path: '',
    component: SanFelipeLosAlzatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanFelipeLosAlzatiPageRoutingModule {}
