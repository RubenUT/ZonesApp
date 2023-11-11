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
  {
    path: 'balamku',
    loadChildren: () => import('./campeche-zones/balamku/balamku.module').then( m => m.BalamkuPageModule)
  },
  {
    path: 'becan',
    loadChildren: () => import('./campeche-zones/becan/becan.module').then( m => m.BecanPageModule)
  },
  {
    path: 'calakmul',
    loadChildren: () => import('./campeche-zones/calakmul/calakmul.module').then( m => m.CalakmulPageModule)
  },
  {
    path: 'chunhuhub',
    loadChildren: () => import('./campeche-zones/chunhuhub/chunhuhub.module').then( m => m.ChunhuhubPageModule)
  },
  {
    path: 'chicanna',
    loadChildren: () => import('./campeche-zones/chicanna/chicanna.module').then( m => m.ChicannaPageModule)
  },
  {
    path: 'dzibilnocac',
    loadChildren: () => import('./campeche-zones/dzibilnocac/dzibilnocac.module').then( m => m.DzibilnocacPageModule)
  },
  {
    path: 'edzna',
    loadChildren: () => import('./campeche-zones/edzna/edzna.module').then( m => m.EdznaPageModule)
  },
  {
    path: 'el-tigre',
    loadChildren: () => import('./campeche-zones/el-tigre/el-tigre.module').then( m => m.ElTigrePageModule)
  },
  {
    path: 'hochob',
    loadChildren: () => import('./campeche-zones/hochob/hochob.module').then( m => m.HochobPageModule)
  },
  {
    path: 'el-hormiguero',
    loadChildren: () => import('./campeche-zones/el-hormiguero/el-hormiguero.module').then( m => m.ElHormigueroPageModule)
  },
  {
    path: 'kanki',
    loadChildren: () => import('./campeche-zones/kanki/kanki.module').then( m => m.KankiPageModule)
  },
  {
    path: 'sanroxta',
    loadChildren: () => import('./campeche-zones/sanroxta/sanroxta.module').then( m => m.SanroxtaPageModule)
  },
  {
    path: 'tabasqueno',
    loadChildren: () => import('./campeche-zones/tabasqueno/tabasqueno.module').then( m => m.TabasquenoPageModule)
  },
  {
    path: 'tohcok',
    loadChildren: () => import('./campeche-zones/tohcok/tohcok.module').then( m => m.TohcokPageModule)
  },
  {
    path: 'xcalumkin',
    loadChildren: () => import('./campeche-zones/xcalumkin/xcalumkin.module').then( m => m.XcalumkinPageModule)
  },
  {
    path: 'xpuhil',
    loadChildren: () => import('./campeche-zones/xpuhil/xpuhil.module').then( m => m.XpuhilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
