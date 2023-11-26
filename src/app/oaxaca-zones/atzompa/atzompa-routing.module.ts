import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtzompaPage } from './atzompa.page';

const routes: Routes = [
  {
    path: '',
    component: AtzompaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtzompaPageRoutingModule {}
