import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElVallecitoPage } from './el-vallecito.page';

const routes: Routes = [
  {
    path: '',
    component: ElVallecitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElVallecitoPageRoutingModule {}
