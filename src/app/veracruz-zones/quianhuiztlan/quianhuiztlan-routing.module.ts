import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuianhuiztlanPage } from './quianhuiztlan.page';

const routes: Routes = [
  {
    path: '',
    component: QuianhuiztlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuianhuiztlanPageRoutingModule {}
