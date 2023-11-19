import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalmaSolaPage } from './palma-sola.page';

const routes: Routes = [
  {
    path: '',
    component: PalmaSolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalmaSolaPageRoutingModule {}
