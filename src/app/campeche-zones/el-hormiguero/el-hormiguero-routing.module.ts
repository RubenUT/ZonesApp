import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElHormigueroPage } from './el-hormiguero.page';

const routes: Routes = [
  {
    path: '',
    component: ElHormigueroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElHormigueroPageRoutingModule {}
