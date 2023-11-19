import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomaPage } from './soma.page';

const routes: Routes = [
  {
    path: '',
    component: SomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomaPageRoutingModule {}
