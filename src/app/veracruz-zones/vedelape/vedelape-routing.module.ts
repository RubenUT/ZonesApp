import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VedelapePage } from './vedelape.page';

const routes: Routes = [
  {
    path: '',
    component: VedelapePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VedelapePageRoutingModule {}
