import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaPaleontologicaRinconColoradoPage } from './zona-paleontologica-rincon-colorado.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaPaleontologicaRinconColoradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaPaleontologicaRinconColoradoPageRoutingModule {}
