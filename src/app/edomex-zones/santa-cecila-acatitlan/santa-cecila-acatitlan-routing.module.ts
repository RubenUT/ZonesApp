import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantaCecilaAcatitlanPage } from './santa-cecila-acatitlan.page';

const routes: Routes = [
  {
    path: '',
    component: SantaCecilaAcatitlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantaCecilaAcatitlanPageRoutingModule {}
