import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IxcateopanPage } from './ixcateopan.page';

const routes: Routes = [
  {
    path: '',
    component: IxcateopanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IxcateopanPageRoutingModule {}
