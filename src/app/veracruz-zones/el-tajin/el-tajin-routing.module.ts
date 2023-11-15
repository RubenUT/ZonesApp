import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElTajinPage } from './el-tajin.page';

const routes: Routes = [
  {
    path: '',
    component: ElTajinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElTajinPageRoutingModule {}
