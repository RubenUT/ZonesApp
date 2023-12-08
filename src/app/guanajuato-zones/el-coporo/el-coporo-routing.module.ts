import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElCoporoPage } from './el-coporo.page';

const routes: Routes = [
  {
    path: '',
    component: ElCoporoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElCoporoPageRoutingModule {}
