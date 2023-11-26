import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocanaDelRioCopalitaPage } from './bocana-del-rio-copalita.page';

const routes: Routes = [
  {
    path: '',
    component: BocanaDelRioCopalitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocanaDelRioCopalitaPageRoutingModule {}
