import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanroxtaPage } from './sanroxta.page';

const routes: Routes = [
  {
    path: '',
    component: SanroxtaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanroxtaPageRoutingModule {}
