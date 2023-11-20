import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalpasitoPage } from './malpasito.page';

const routes: Routes = [
  {
    path: '',
    component: MalpasitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalpasitoPageRoutingModule {}
