import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XochipalaPage } from './xochipala.page';

const routes: Routes = [
  {
    path: '',
    component: XochipalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XochipalaPageRoutingModule {}
