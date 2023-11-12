import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IxtapalucaPage } from './ixtapaluca.page';

const routes: Routes = [
  {
    path: '',
    component: IxtapalucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IxtapalucaPageRoutingModule {}
