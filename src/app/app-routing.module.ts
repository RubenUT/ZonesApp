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
    loadChildren: () => import('./qroo-zones/el-rey/el-rey.module').then( m => m.ElReyPageModule)
  },
  {
    path: 'el-meco',
    loadChildren: () => import('./qroo-zones/el-meco/el-meco.module').then( m => m.ElMecoPageModule)
  },
  {
    path: 'san-gervasio',
    loadChildren: () => import('./qroo-zones/san-gervasio/san-gervasio.module').then( m => m.SanGervasioPageModule)
  },
  {
    path: 'xelha',
    loadChildren: () => import('./qroo-zones/xelha/xelha.module').then( m => m.XelhaPageModule)
  },
  {
    path: 'tulum',
    loadChildren: () => import('./qroo-zones/tulum/tulum.module').then( m => m.TulumPageModule)
  },
  {
    path: 'coba',
    loadChildren: () => import('./qroo-zones/coba/coba.module').then( m => m.CobaPageModule)
  },
  {
    path: 'ek-balam',
    loadChildren: () => import('./Yuca-zone/ek-balam/ek-balam.module').then( m => m.EkBalamPageModule)
  },
  {
    path: 'chichen-itza',
    loadChildren: () => import('./Yuca-zone/chichen-itza/chichen-itza.module').then( m => m.ChichenItzaPageModule)
  },
  {
    path: 'izamal',
    loadChildren: () => import('./Yuca-zone/izamal/izamal.module').then( m => m.IzamalPageModule)
  },
  {
    path: 'ake',
    loadChildren: () => import('./Yuca-zone/ake/ake.module').then( m => m.AkePageModule)
  },
  {
    path: 'xcambo',
    loadChildren: () => import('./Yuca-zone/xcambo/xcambo.module').then( m => m.XcamboPageModule)
  },
  {
    path: 'dzibilchaltun',
    loadChildren: () => import('./Yuca-zone/dzibilchaltun/dzibilchaltun.module').then( m => m.DzibilchaltunPageModule)
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
  },
  {
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
  {
    path: 'querende',
    loadChildren: () => import('./guerrero-zones/querende/querende.module').then( m => m.QuerendePageModule)
  },
  {
    path: 'soma',
    loadChildren: () => import('./guerrero-zones/soma/soma.module').then( m => m.SomaPageModule)
  },
  {
    path: 'huamuxtitlan',
    loadChildren: () => import('./guerrero-zones/huamuxtitlan/huamuxtitlan.module').then( m => m.HuamuxtitlanPageModule)
  },
  {
    path: 'ixcateopan',
    loadChildren: () => import('./guerrero-zones/ixcateopan/ixcateopan.module').then( m => m.IxcateopanPageModule)
  },
  {
    path: 'xochipala',
    loadChildren: () => import('./guerrero-zones/xochipala/xochipala.module').then( m => m.XochipalaPageModule)
  },
  {
    path: 'la-sabana',
    loadChildren: () => import('./guerrero-zones/la-sabana/la-sabana.module').then( m => m.LaSabanaPageModule)
  },
  {
    path: 'los-tepoltzis',
    loadChildren: () => import('./guerrero-zones/los-tepoltzis/los-tepoltzis.module').then( m => m.LosTepoltzisPageModule)
  },
  {
    path: 'palma-sola',
    loadChildren: () => import('./guerrero-zones/palma-sola/palma-sola.module').then( m => m.PalmaSolaPageModule)
  },
  {
    path: 'tehuacalco',
    loadChildren: () => import('./guerrero-zones/tehuacalco/tehuacalco.module').then( m => m.TehuacalcoPageModule)
  },
  {
    path: 'teopantecuanitlan',
    loadChildren: () => import('./guerrero-zones/teopantecuanitlan/teopantecuanitlan.module').then( m => m.TeopantecuanitlanPageModule)
  },
  {
    path: 'comalcalco',
    loadChildren: () => import('./tabasco-zones/comalcalco/comalcalco.module').then( m => m.ComalcalcoPageModule)
  },
  {
    path: 'la-venta',
    loadChildren: () => import('./tabasco-zones/la-venta/la-venta.module').then( m => m.LaVentaPageModule)
  },
  {
    path: 'malpasito',
    loadChildren: () => import('./tabasco-zones/malpasito/malpasito.module').then( m => m.MalpasitoPageModule)
  },
  {
    path: 'moral-reforma',
    loadChildren: () => import('./tabasco-zones/moral-reforma/moral-reforma.module').then( m => m.MoralReformaPageModule)
  },
  {
    path: 'pomona',
    loadChildren: () => import('./tabasco-zones/pomona/pomona.module').then( m => m.PomonaPageModule)
  },
  {
    path: 'huapalcalco',
    loadChildren: () => import('./hidalgo-zones/huapalcalco/huapalcalco.module').then( m => m.HuapalcalcoPageModule)
  },
  {
    path: 'pahnu',
    loadChildren: () => import('./hidalgo-zones/pahnu/pahnu.module').then( m => m.PahnuPageModule)
  },
  {
    path: 'tula',
    loadChildren: () => import('./hidalgo-zones/tula/tula.module').then( m => m.TulaPageModule)
  },
  {
    path: 'xihuingo',
    loadChildren: () => import('./hidalgo-zones/xihuingo/xihuingo.module').then( m => m.XihuingoPageModule)
  },
  {
    path: 'calica',
    loadChildren: () => import('./qroo-zones/calica/calica.module').then( m => m.CalicaPageModule)
  },
  {
    path: 'chankanbakan',
    loadChildren: () => import('./qroo-zones/chankanbakan/chankanbakan.module').then( m => m.ChankanbakanPageModule)
  },
  {
    path: 'caracol',
    loadChildren: () => import('./qroo-zones/caracol/caracol.module').then( m => m.CaracolPageModule)
  },
  {
    path: 'chachoben',
    loadChildren: () => import('./qroo-zones/chachoben/chachoben.module').then( m => m.ChachobenPageModule)
  },
  {
    path: 'dzibanche',
    loadChildren: () => import('./qroo-zones/dzibanche/dzibanche.module').then( m => m.DzibanchePageModule)
  },
  {
    path: 'kinichna',
    loadChildren: () => import('./qroo-zones/kinichna/kinichna.module').then( m => m.KinichnaPageModule)
  },
  {
    path: 'kohunlich',
    loadChildren: () => import('./qroo-zones/kohunlich/kohunlich.module').then( m => m.KohunlichPageModule)
  },
  {
    path: 'muyil',
    loadChildren: () => import('./qroo-zones/muyil/muyil.module').then( m => m.MuyilPageModule)
  },
  {
    path: 'oxtankah',
    loadChildren: () => import('./qroo-zones/oxtankah/oxtankah.module').then( m => m.OxtankahPageModule)
  },
  {
    path: 'playa-del-carmen',
    loadChildren: () => import('./qroo-zones/playa-del-carmen/playa-del-carmen.module').then( m => m.PlayaDelCarmenPageModule)
  },
  {
    path: 'san-miguelto',
    loadChildren: () => import('./qroo-zones/san-miguelto/san-miguelto.module').then( m => m.SanMigueltoPageModule)
  },
  {
    path: 'xcaret',
    loadChildren: () => import('./qroo-zones/xcaret/xcaret.module').then( m => m.XcaretPageModule)
  },
  {
    path: 'acanceh',
    loadChildren: () => import('./Yuca-zone/acanceh/acanceh.module').then( m => m.AcancehPageModule)
  },
  {
    path: 'balamcanche',
    loadChildren: () => import('./Yuca-zone/balamcanche/balamcanche.module').then( m => m.BalamcanchePageModule)
  },
  {
    path: 'chacmultun',
    loadChildren: () => import('./Yuca-zone/chacmultun/chacmultun.module').then( m => m.ChacmultunPageModule)
  },
  {
    path: 'kabah',
    loadChildren: () => import('./Yuca-zone/kabah/kabah.module').then( m => m.KabahPageModule)
  },
  {
    path: 'labna',
    loadChildren: () => import('./Yuca-zone/labna/labna.module').then( m => m.LabnaPageModule)
  },
  {
    path: 'loltun',
    loadChildren: () => import('./Yuca-zone/loltun/loltun.module').then( m => m.LoltunPageModule)
  },
  {
    path: 'mayapan',
    loadChildren: () => import('./Yuca-zone/mayapan/mayapan.module').then( m => m.MayapanPageModule)
  },
  {
    path: 'oxkintok',
    loadChildren: () => import('./Yuca-zone/oxkintok/oxkintok.module').then( m => m.OxkintokPageModule)
  },
  {
    path: 'sayil',
    loadChildren: () => import('./Yuca-zone/sayil/sayil.module').then( m => m.SayilPageModule)
  },
  {
    path: 'xlapak',
    loadChildren: () => import('./Yuca-zone/xlapak/xlapak.module').then( m => m.XlapakPageModule)
  },
  {
    path: 'uxmal',
    loadChildren: () => import('./Yuca-zone/uxmal/uxmal.module').then( m => m.UxmalPageModule)
  },
  {
    path: 'atzompa',
    loadChildren: () => import('./oaxaca-zones/atzompa/atzompa.module').then( m => m.AtzompaPageModule)
  },
  {
    path: 'bocana-del-rio-copalita',
    loadChildren: () => import('./oaxaca-zones/bocana-del-rio-copalita/bocana-del-rio-copalita.module').then( m => m.BocanaDelRioCopalitaPageModule)
  },
  {
    path: 'dainzu',
    loadChildren: () => import('./oaxaca-zones/dainzu/dainzu.module').then( m => m.DainzuPageModule)
  },
  {
    path: 'guiengola',
    loadChildren: () => import('./oaxaca-zones/guiengola/guiengola.module').then( m => m.GuiengolaPageModule)
  },
  {
    path: 'huamelupan',
    loadChildren: () => import('./oaxaca-zones/huamelupan/huamelupan.module').then( m => m.HuamelupanPageModule)
  },
  {
    path: 'lambityeco',
    loadChildren: () => import('./oaxaca-zones/lambityeco/lambityeco.module').then( m => m.LambityecoPageModule)
  },
  {
    path: 'mitla',
    loadChildren: () => import('./oaxaca-zones/mitla/mitla.module').then( m => m.MitlaPageModule)
  },
  {
    path: 'monte-alban',
    loadChildren: () => import('./oaxaca-zones/monte-alban/monte-alban.module').then( m => m.MonteAlbanPageModule)
  },
  {
    path: 'yagul',
    loadChildren: () => import('./oaxaca-zones/yagul/yagul.module').then( m => m.YagulPageModule)
  },
  {
    path: 'zaachila',
    loadChildren: () => import('./oaxaca-zones/zaachila/zaachila.module').then( m => m.ZaachilaPageModule)
  },
  {
    path: 'tepapayeca',
    loadChildren: () => import('./puebla-zones/tepapayeca/tepapayeca.module').then( m => m.TepapayecaPageModule)
  },
  {
    path: 'cantona',
    loadChildren: () => import('./puebla-zones/cantona/cantona.module').then( m => m.CantonaPageModule)
  },
  {
    path: 'cholula',
    loadChildren: () => import('./puebla-zones/cholula/cholula.module').then( m => m.CholulaPageModule)
  },
  {
    path: 'cerritos-de-san-cristobal',
    loadChildren: () => import('./puebla-zones/cerritos-de-san-cristobal/cerritos-de-san-cristobal.module').then( m => m.CerritosDeSanCristobalPageModule)
  },
  {
    path: 'tepexi-el-viejo',
    loadChildren: () => import('./puebla-zones/tepexi-el-viejo/tepexi-el-viejo.module').then( m => m.TepexiElViejoPageModule)
  },
  {
    path: 'yhualichan',
    loadChildren: () => import('./puebla-zones/yhualichan/yhualichan.module').then( m => m.YhualichanPageModule)
  },
  {
    path: 'cuicuilco',
    loadChildren: () => import('./cdmx-zones/cuicuilco/cuicuilco.module').then( m => m.CuicuilcoPageModule)
  },
  {
    path: 'templo-mayor',
    loadChildren: () => import('./cdmx-zones/templo-mayor/templo-mayor.module').then( m => m.TemploMayorPageModule)
  },
  {
    path: 'mixcoac',
    loadChildren: () => import('./cdmx-zones/mixcoac/mixcoac.module').then( m => m.MixcoacPageModule)
  },
  {
    path: 'tlatelolco',
    loadChildren: () => import('./cdmx-zones/tlatelolco/tlatelolco.module').then( m => m.TlatelolcoPageModule)
  },
  {
    path: 'cerro-de-la-estrella',
    loadChildren: () => import('./cdmx-zones/cerro-de-la-estrella/cerro-de-la-estrella.module').then( m => m.CerroDeLaEstrellaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
