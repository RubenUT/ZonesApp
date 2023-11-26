import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemploMayorPage } from './templo-mayor.page';

const routes: Routes = [
  {
    path: '',
    component: TemploMayorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemploMayorPageRoutingModule {}
