import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasteayoPage } from './casteayo.page';

const routes: Routes = [
  {
    path: '',
    component: CasteayoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasteayoPageRoutingModule {}
