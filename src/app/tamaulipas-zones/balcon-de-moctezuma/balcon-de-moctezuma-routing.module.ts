import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalconDeMoctezumaPage } from './balcon-de-moctezuma.page';

const routes: Routes = [
  {
    path: '',
    component: BalconDeMoctezumaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalconDeMoctezumaPageRoutingModule {}
