import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerroDeLaEstrellaPage } from './cerro-de-la-estrella.page';

const routes: Routes = [
  {
    path: '',
    component: CerroDeLaEstrellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerroDeLaEstrellaPageRoutingModule {}
