import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TlatelolcoPage } from './tlatelolco.page';

const routes: Routes = [
  {
    path: '',
    component: TlatelolcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TlatelolcoPageRoutingModule {}
