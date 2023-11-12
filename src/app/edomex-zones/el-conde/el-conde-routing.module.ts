import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElCondePage } from './el-conde.page';

const routes: Routes = [
  {
    path: '',
    component: ElCondePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElCondePageRoutingModule {}
