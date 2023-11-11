import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XpuhilPage } from './xpuhil.page';

const routes: Routes = [
  {
    path: '',
    component: XpuhilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XpuhilPageRoutingModule {}
