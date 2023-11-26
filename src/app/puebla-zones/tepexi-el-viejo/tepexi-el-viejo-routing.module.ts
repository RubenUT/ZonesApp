import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TepexiElViejoPage } from './tepexi-el-viejo.page';

const routes: Routes = [
  {
    path: '',
    component: TepexiElViejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TepexiElViejoPageRoutingModule {}
