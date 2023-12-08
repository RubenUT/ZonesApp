import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecoaquePage } from './tecoaque.page';

const routes: Routes = [
  {
    path: '',
    component: TecoaquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecoaquePageRoutingModule {}
