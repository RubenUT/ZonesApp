import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerroDeLasVentanasPage } from './cerro-de-las-ventanas.page';

const routes: Routes = [
  {
    path: '',
    component: CerroDeLasVentanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerroDeLasVentanasPageRoutingModule {}
