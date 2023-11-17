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
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'ixtapaluca',
    loadChildren: () => import('./edomex-zones/ixtapaluca/ixtapaluca.module').then( m => m.IxtapalucaPageModule)
  },
  {
    path: 'calixtlahuaca',
    loadChildren: () => import('./edomex-zones/calixtlahuaca/calixtlahuaca.module').then( m => m.CalixtlahuacaPageModule)
  },
  {
    path: 'chimalhuacan',
    loadChildren: () => import('./edomex-zones/chimalhuacan/chimalhuacan.module').then( m => m.ChimalhuacanPageModule)
  },
  {
    path: 'el-conde',
    loadChildren: () => import('./edomex-zones/el-conde/el-conde.module').then( m => m.ElCondePageModule)
  },
  {
    path: 'huamango',
    loadChildren: () => import('./edomex-zones/huamango/huamango.module').then( m => m.HuamangoPageModule)
  },
  {
    path: 'huexotla',
    loadChildren: () => import('./edomex-zones/huexotla/huexotla.module').then( m => m.HuexotlaPageModule)
  },
  {
    path: 'los-melones',
    loadChildren: () => import('./edomex-zones/los-melones/los-melones.module').then( m => m.LosMelonesPageModule)
  },
  {
    path: 'reyes-paz',
    loadChildren: () => import('./edomex-zones/reyes-paz/reyes-paz.module').then( m => m.ReyesPazPageModule)
  },
  {
    path: 'malinalco',
    loadChildren: () => import('./edomex-zones/malinalco/malinalco.module').then( m => m.MalinalcoPageModule)
  },
  {
    path: 'casteayo',
    loadChildren: () => import('./veracruz-zones/casteayo/casteayo.module').then( m => m.CasteayoPageModule)
  },
  {
    path: 'cempoala',
    loadChildren: () => import('./veracruz-zones/cempoala/cempoala.module').then( m => m.CempoalaPageModule)
  },
  {
    path: 'cuajilote',
    loadChildren: () => import('./veracruz-zones/cuajilote/cuajilote.module').then( m => m.CuajilotePageModule)
  },
  {
    path: 'cuyuxquihui',
    loadChildren: () => import('./veracruz-zones/cuyuxquihui/cuyuxquihui.module').then( m => m.CuyuxquihuiPageModule)
  },
  {
    path: 'el-tajin',
    loadChildren: () => import('./veracruz-zones/el-tajin/el-tajin.module').then( m => m.ElTajinPageModule)
  },
  {
    path: 'las-higueras',
    loadChildren: () => import('./veracruz-zones/las-higueras/las-higueras.module').then( m => m.LasHiguerasPageModule)
  },
  {
    path: 'quianhuiztlan',
    loadChildren: () => import('./veracruz-zones/quianhuiztlan/quianhuiztlan.module').then( m => m.QuianhuiztlanPageModule)
  },
  {
    path: 'sanloten',
    loadChildren: () => import('./veracruz-zones/sanloten/sanloten.module').then( m => m.SanlotenPageModule)
  },  {
    path: 'tres-zapotes',
    loadChildren: () => import('./veracruz-zones/tres-zapotes/tres-zapotes.module').then( m => m.TresZapotesPageModule)
  },
  {
    path: 'vedelape',
    loadChildren: () => import('./veracruz-zones/vedelape/vedelape.module').then( m => m.VedelapePageModule)
  },
  {
    path: 'olintepec',
    loadChildren: () => import('./morelos-zones/olintepec/olintepec.module').then( m => m.OlintepecPageModule)
  },
  {
    path: 'chalcatzingo',
    loadChildren: () => import('./morelos-zones/chalcatzingo/chalcatzingo.module').then( m => m.ChalcatzingoPageModule)
  },
  {
    path: 'coatetelco',
    loadChildren: () => import('./morelos-zones/coatetelco/coatetelco.module').then( m => m.CoatetelcoPageModule)
  },
  {
    path: 'las-pilas',
    loadChildren: () => import('./morelos-zones/las-pilas/las-pilas.module').then( m => m.LasPilasPageModule)
  },
  {
    path: 'teopanzolco',
    loadChildren: () => import('./morelos-zones/teopanzolco/teopanzolco.module').then( m => m.TeopanzolcoPageModule)
  },
  {
    path: 'tepozteco',
    loadChildren: () => import('./morelos-zones/tepozteco/tepozteco.module').then( m => m.TepoztecoPageModule)
  },
  {
    path: 'xochicalco',
    loadChildren: () => import('./morelos-zones/xochicalco/xochicalco.module').then( m => m.XochicalcoPageModule)
  },
  {
    path: 'yautepec',
    loadChildren: () => import('./morelos-zones/yautepec/yautepec.module').then( m => m.YautepecPageModule)
  },
  {
    path: 'san-miguel-ixtapan',
    loadChildren: () => import('./edomex-zones/san-miguel-ixtapan/san-miguel-ixtapan.module').then( m => m.SanMiguelIxtapanPageModule)
  },
  {
    path: 'tenayuca-l-ll',
    loadChildren: () => import('./edomex-zones/tenayuca-l-ll/tenayuca-l-ll.module').then( m => m.TenayucaLLlPageModule)
  },
  {
    path: 'teotenango',
    loadChildren: () => import('./edomex-zones/teotenango/teotenango.module').then( m => m.TeotenangoPageModule)
  },
  {
    path: 'teotihuacan',
    loadChildren: () => import('./edomex-zones/teotihuacan/teotihuacan.module').then( m => m.TeotihuacanPageModule)
  },
  {
    path: 'tetzcotzingo',
    loadChildren: () => import('./edomex-zones/tetzcotzingo/tetzcotzingo.module').then( m => m.TetzcotzingoPageModule)
  },
  {
    path: 'tlapacoya',
    loadChildren: () => import('./edomex-zones/tlapacoya/tlapacoya.module').then( m => m.TlapacoyaPageModule)
  },
  {
    path: 'tocuila',
    loadChildren: () => import('./edomex-zones/tocuila/tocuila.module').then( m => m.TocuilaPageModule)
  },
  {
    path: 'santa-cecila-acatitlan',
    loadChildren: () => import('./edomex-zones/santa-cecila-acatitlan/santa-cecila-acatitlan.module').then( m => m.SantaCecilaAcatitlanPageModule)
  },
  {
    path: 'ocoyoacac',
    loadChildren: () => import('./edomex-zones/ocoyoacac/ocoyoacac.module').then( m => m.OcoyoacacPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
