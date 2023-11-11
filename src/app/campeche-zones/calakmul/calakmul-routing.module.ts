import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalakmulPage } from './calakmul.page';

const routes: Routes = [
  {
    path: '',
    component: CalakmulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalakmulPageRoutingModule {}
