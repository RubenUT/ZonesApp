import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerritosDeSanCristobalPage } from './cerritos-de-san-cristobal.page';

const routes: Routes = [
  {
    path: '',
    component: CerritosDeSanCristobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerritosDeSanCristobalPageRoutingModule {}
