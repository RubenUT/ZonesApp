import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YhualichanPage } from './yhualichan.page';

const routes: Routes = [
  {
    path: '',
    component: YhualichanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YhualichanPageRoutingModule {}
