import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElSabinitoPage } from './el-sabinito.page';

const routes: Routes = [
  {
    path: '',
    component: ElSabinitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElSabinitoPageRoutingModule {}
