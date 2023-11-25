import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChankanbakanPage } from './chankanbakan.page';

const routes: Routes = [
  {
    path: '',
    component: ChankanbakanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChankanbakanPageRoutingModule {}
