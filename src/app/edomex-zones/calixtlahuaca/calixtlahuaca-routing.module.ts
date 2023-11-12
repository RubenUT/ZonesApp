import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalixtlahuacaPage } from './calixtlahuaca.page';

const routes: Routes = [
  {
    path: '',
    component: CalixtlahuacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalixtlahuacaPageRoutingModule {}
