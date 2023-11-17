import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeotenangoPage } from './teotenango.page';

const routes: Routes = [
  {
    path: '',
    component: TeotenangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeotenangoPageRoutingModule {}
