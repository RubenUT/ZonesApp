import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalicaPage } from './calica.page';

const routes: Routes = [
  {
    path: '',
    component: CalicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalicaPageRoutingModule {}
