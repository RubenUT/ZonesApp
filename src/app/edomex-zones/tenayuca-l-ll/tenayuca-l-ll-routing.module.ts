import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenayucaLLlPage } from './tenayuca-l-ll.page';

const routes: Routes = [
  {
    path: '',
    component: TenayucaLLlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenayucaLLlPageRoutingModule {}
