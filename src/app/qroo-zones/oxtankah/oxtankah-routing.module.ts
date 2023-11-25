import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OxtankahPage } from './oxtankah.page';

const routes: Routes = [
  {
    path: '',
    component: OxtankahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OxtankahPageRoutingModule {}
