import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'el-rey',
    loadChildren: () => import('./el-rey/el-rey.module').then( m => m.ElReyPageModule)
  },
  {
    path: 'el-meco',
    loadChildren: () => import('./el-meco/el-meco.module').then( m => m.ElMecoPageModule)
  },
  {
    path: 'san-gervasio',
    loadChildren: () => import('./san-gervasio/san-gervasio.module').then( m => m.SanGervasioPageModule)
  },
  {
    path: 'xelha',
    loadChildren: () => import('./xelha/xelha.module').then( m => m.XelhaPageModule)
  },
  {
    path: 'tulum',
    loadChildren: () => import('./tulum/tulum.module').then( m => m.TulumPageModule)
  },
  {
    path: 'coba',
    loadChildren: () => import('./coba/coba.module').then( m => m.CobaPageModule)
  },
  {
    path: 'ek-balam',
    loadChildren: () => import('./ek-balam/ek-balam.module').then( m => m.EkBalamPageModule)
  },
  {
    path: 'chichen-itza',
    loadChildren: () => import('./chichen-itza/chichen-itza.module').then( m => m.ChichenItzaPageModule)
  },
  {
    path: 'izamal',
    loadChildren: () => import('./izamal/izamal.module').then( m => m.IzamalPageModule)
  },
  {
    path: 'ake',
    loadChildren: () => import('./ake/ake.module').then( m => m.AkePageModule)
  },
  {
    path: 'xcambo',
    loadChildren: () => import('./xcambo/xcambo.module').then( m => m.XcamboPageModule)
  },
  {
    path: 'dzibilchaltun',
    loadChildren: () => import('./dzibilchaltun/dzibilchaltun.module').then( m => m.DzibilchaltunPageModule)
  },
  {
    path: 'el-vallecito',
    loadChildren: () => import('./baja-california-zones/el-vallecito/el-vallecito.module').then( m => m.ElVallecitoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
