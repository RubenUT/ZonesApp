import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayapanPage } from './mayapan.page';

const routes: Routes = [
  {
    path: '',
    component: MayapanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayapanPageRoutingModule {}
