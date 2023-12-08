import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IhuatzioPage } from './ihuatzio.page';

const routes: Routes = [
  {
    path: '',
    component: IhuatzioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IhuatzioPageRoutingModule {}
