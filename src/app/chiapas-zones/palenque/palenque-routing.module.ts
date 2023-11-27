import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalenquePage } from './palenque.page';

const routes: Routes = [
  {
    path: '',
    component: PalenquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalenquePageRoutingModule {}
