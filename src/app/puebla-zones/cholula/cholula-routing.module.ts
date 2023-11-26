import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CholulaPage } from './cholula.page';

const routes: Routes = [
  {
    path: '',
    component: CholulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CholulaPageRoutingModule {}
