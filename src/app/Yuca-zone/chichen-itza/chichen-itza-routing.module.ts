import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChichenItzaPage } from './chichen-itza.page';

const routes: Routes = [
  {
    path: '',
    component: ChichenItzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChichenItzaPageRoutingModule {}
