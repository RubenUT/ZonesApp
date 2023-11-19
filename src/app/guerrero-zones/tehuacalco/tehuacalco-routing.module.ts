import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TehuacalcoPage } from './tehuacalco.page';

const routes: Routes = [
  {
    path: '',
    component: TehuacalcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TehuacalcoPageRoutingModule {}
