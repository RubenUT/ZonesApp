import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElReyPage } from './el-rey.page';

const routes: Routes = [
  {
    path: '',
    component: ElReyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElReyPageRoutingModule {}
