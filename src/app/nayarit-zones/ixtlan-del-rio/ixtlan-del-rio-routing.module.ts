import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IxtlanDelRioPage } from './ixtlan-del-rio.page';

const routes: Routes = [
  {
    path: '',
    component: IxtlanDelRioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IxtlanDelRioPageRoutingModule {}
