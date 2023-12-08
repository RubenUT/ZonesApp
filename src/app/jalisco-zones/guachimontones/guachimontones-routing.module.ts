import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuachimontonesPage } from './guachimontones.page';

const routes: Routes = [
  {
    path: '',
    component: GuachimontonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuachimontonesPageRoutingModule {}
