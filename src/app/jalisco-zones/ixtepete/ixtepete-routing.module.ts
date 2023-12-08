import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IxtepetePage } from './ixtepete.page';

const routes: Routes = [
  {
    path: '',
    component: IxtepetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IxtepetePageRoutingModule {}
