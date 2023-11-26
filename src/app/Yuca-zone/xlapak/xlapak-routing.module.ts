import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XlapakPage } from './xlapak.page';

const routes: Routes = [
  {
    path: '',
    component: XlapakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XlapakPageRoutingModule {}
