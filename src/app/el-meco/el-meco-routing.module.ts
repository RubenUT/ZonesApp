import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElMecoPage } from './el-meco.page';

const routes: Routes = [
  {
    path: '',
    component: ElMecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElMecoPageRoutingModule {}
