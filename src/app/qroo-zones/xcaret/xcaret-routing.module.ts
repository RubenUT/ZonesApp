import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XcaretPage } from './xcaret.page';

const routes: Routes = [
  {
    path: '',
    component: XcaretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XcaretPageRoutingModule {}
