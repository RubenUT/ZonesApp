import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacaxtlaPage } from './cacaxtla.page';

const routes: Routes = [
  {
    path: '',
    component: CacaxtlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CacaxtlaPageRoutingModule {}
