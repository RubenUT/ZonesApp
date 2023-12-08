import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TzintzuntzanPage } from './tzintzuntzan.page';

const routes: Routes = [
  {
    path: '',
    component: TzintzuntzanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TzintzuntzanPageRoutingModule {}
