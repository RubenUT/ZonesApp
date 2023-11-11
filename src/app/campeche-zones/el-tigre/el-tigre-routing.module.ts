import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElTigrePage } from './el-tigre.page';

const routes: Routes = [
  {
    path: '',
    component: ElTigrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElTigrePageRoutingModule {}
