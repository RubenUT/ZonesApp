import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuyuxquihuiPage } from './cuyuxquihui.page';

const routes: Routes = [
  {
    path: '',
    component: CuyuxquihuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuyuxquihuiPageRoutingModule {}
