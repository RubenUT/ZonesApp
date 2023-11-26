import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiengolaPage } from './guiengola.page';

const routes: Routes = [
  {
    path: '',
    component: GuiengolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiengolaPageRoutingModule {}
