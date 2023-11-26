import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayilPage } from './sayil.page';

const routes: Routes = [
  {
    path: '',
    component: SayilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SayilPageRoutingModule {}
