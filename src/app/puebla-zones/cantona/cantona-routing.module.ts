import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantonaPage } from './cantona.page';

const routes: Routes = [
  {
    path: '',
    component: CantonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantonaPageRoutingModule {}
