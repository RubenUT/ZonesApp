import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IglesiaViejaPage } from './iglesia-vieja.page';

const routes: Routes = [
  {
    path: '',
    component: IglesiaViejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglesiaViejaPageRoutingModule {}
