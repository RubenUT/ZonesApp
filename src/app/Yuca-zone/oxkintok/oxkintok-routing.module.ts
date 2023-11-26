import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OxkintokPage } from './oxkintok.page';

const routes: Routes = [
  {
    path: '',
    component: OxkintokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OxkintokPageRoutingModule {}
