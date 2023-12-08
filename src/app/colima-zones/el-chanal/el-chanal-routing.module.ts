import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElChanalPage } from './el-chanal.page';

const routes: Routes = [
  {
    path: '',
    component: ElChanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElChanalPageRoutingModule {}
