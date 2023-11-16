import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChalcatzingoPage } from './chalcatzingo.page';

const routes: Routes = [
  {
    path: '',
    component: ChalcatzingoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChalcatzingoPageRoutingModule {}
