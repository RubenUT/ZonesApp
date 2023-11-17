import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TetzcotzingoPage } from './tetzcotzingo.page';

const routes: Routes = [
  {
    path: '',
    component: TetzcotzingoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TetzcotzingoPageRoutingModule {}
