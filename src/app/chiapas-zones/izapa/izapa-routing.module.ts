import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzapaPage } from './izapa.page';

const routes: Routes = [
  {
    path: '',
    component: IzapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzapaPageRoutingModule {}
