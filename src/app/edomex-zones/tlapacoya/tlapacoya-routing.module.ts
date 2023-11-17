import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TlapacoyaPage } from './tlapacoya.page';

const routes: Routes = [
  {
    path: '',
    component: TlapacoyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TlapacoyaPageRoutingModule {}
