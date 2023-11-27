import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonampakPage } from './bonampak.page';

const routes: Routes = [
  {
    path: '',
    component: BonampakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonampakPageRoutingModule {}
