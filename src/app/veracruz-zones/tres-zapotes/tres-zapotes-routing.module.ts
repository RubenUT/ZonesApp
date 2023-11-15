import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TresZapotesPage } from './tres-zapotes.page';

const routes: Routes = [
  {
    path: '',
    component: TresZapotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresZapotesPageRoutingModule {}
