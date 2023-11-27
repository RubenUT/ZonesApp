import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaxchilanPage } from './yaxchilan.page';

const routes: Routes = [
  {
    path: '',
    component: YaxchilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaxchilanPageRoutingModule {}
