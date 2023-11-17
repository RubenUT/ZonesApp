import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocuilaPage } from './tocuila.page';

const routes: Routes = [
  {
    path: '',
    component: TocuilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocuilaPageRoutingModule {}
