import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TingambatoPage } from './tingambato.page';

const routes: Routes = [
  {
    path: '',
    component: TingambatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TingambatoPageRoutingModule {}
