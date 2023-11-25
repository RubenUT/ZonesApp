import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayaDelCarmenPage } from './playa-del-carmen.page';

const routes: Routes = [
  {
    path: '',
    component: PlayaDelCarmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayaDelCarmenPageRoutingModule {}
