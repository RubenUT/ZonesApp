import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  estados = [
    {
      nombre: 'Baja California',
      zonas: [
        { nombre: 'Zona arqueológica de El Vallecito', imagen: 'assets/img/baja-california-img/bc_vallecito.jpg', ruta: '/el-vallecito'},
      ],
      currentPage: 1,
      itemsPerPage: 4,
    },
    {
      nombre: 'Campeche',
      zonas: [
        { nombre: 'Zona arqueológica de Balamku', imagen: 'assets/img/campeche-img/bk_thn.jpg', ruta: '/balamku'},
        { nombre: 'Zona arqueológica de Becan', imagen: 'assets/img/campeche-img/becan-tbn.jpg', ruta: '/becan'},
        { nombre: 'Zona arqueológica de Calakmul', imagen: 'assets/img/campeche-img/calakmul-tbn.jpg', ruta: '/calakmul' },
        { nombre: 'Zona arqueológica de Chunhuhub', imagen: 'assets/img/campeche-img/chhb-tbn.jpg', ruta: '/chunhuhub' },
        { nombre: 'Zona arqueológica de Chicanná', imagen: 'assets/img/campeche-img/chicanna-tbn.jpg', ruta: '/chicanna' },
        { nombre: 'Zona arqueológica de Dzibilnocac', imagen: 'assets/img/campeche-img/dzibilnocac-tbn.jpg', ruta: '/dzibilnocac' },
        { nombre: 'Zona arqueológica de Edzna', imagen: 'assets/img/campeche-img/edzna-tbn.jpg', ruta: '/edzna' },
        { nombre: 'Zona arqueológica de El Tigre', imagen: 'assets/img/campeche-img/el-tigre-tbn.jpg', ruta: '/el-tigre' },
        { nombre: 'Zona arqueológica de Hochob', imagen: 'assets/img/campeche-img/hochob-tbn.jpg', ruta: '/hochob' },
        { nombre: 'Zona arqueológica de El Hormiguero', imagen: 'assets/img/campeche-img/hormiguero-tbn.jpeg', ruta: '/el-hormiguero' },
        { nombre: 'Zona arqueológica de Kankí', imagen: 'assets/img/campeche-img/kanki-tbn.jpg', ruta: '/kanki' },
        { nombre: 'Zona arqueológica de Santa Rosa Xtampak', imagen: 'assets/img/campeche-img/sanmaxta-tbn.jpeg', ruta: '/sanroxta' },
        { nombre: 'Zona arqueológica de Tabasqueño', imagen: 'assets/img/campeche-img/tabasqueno-tbn.jpeg', ruta: '/tabasqueno' },
        { nombre: 'Zona arqueológica de Tohcok', imagen: 'assets/img/campeche-img/tohcok-tbn.jpg', ruta: '/tohcok' },
        { nombre: 'Zona arqueológica de Xcalumkin', imagen: 'assets/img/campeche-img/xcalumkin-tbn.jpg', ruta: '/xcalumkin' },
        { nombre: 'Zona arqueológica de Xpuhil', imagen: 'assets/img/campeche-img/xpuhil-tbn.jpeg', ruta: '/xpuhil' },
      ],
      currentPage: 1,
      itemsPerPage: 4,
    },
    {
      nombre: 'Estado de México',
      zonas: [
        { nombre: 'Zona arqueológica de Ixtapaluca', imagen: 'assets/img/edomex-img/ixtapaluca-tbn.jpeg', ruta: '/ixtapaluca'},
        { nombre: 'Zona arqueológica de Calixtlahuaca', imagen: 'assets/img/edomex-img/calixtlahuaca-tbn.jpeg', ruta: '/calixtlahuaca'},
        { nombre: 'Zona arqueológica de Chimalhuacan', imagen: 'assets/img/edomex-img/chimalhuacan-tbn.jpg', ruta: '/chimalhuacan'},
        { nombre: 'Zona arqueológica de El Conde', imagen: 'assets/img/edomex-img/el-conde-tbn.jpg', ruta: '/el-conde'},
        { nombre: 'Zona arqueológica de Huamango', imagen: 'assets/img/edomex-img/huamango-tbn.jpg', ruta: '/huamango'},
        { nombre: 'Zona arqueológica de Huexotla', imagen: 'assets/img/edomex-img/huexotla-tbn.jpeg', ruta: '/huexotla'},
        { nombre: 'Zona arqueológica de Los Melones', imagen: 'assets/img/edomex-img/los-melones-tbn.jpg', ruta: '/los-melones'},
        { nombre: 'Zona arqueológica de Los Reyes La Paz', imagen: 'assets/img/edomex-img/reyes-paz-tbn.jpeg', ruta: '/reyes-paz'},
        { nombre: 'Zona arqueológica de Malinalco', imagen: 'assets/img/edomex-img/malinalco-tbn.jpg', ruta: '/malinalco'},
        { nombre: 'Zona arqueológica de San Miguel Ixtapan', imagen: 'assets/img/edomex-img/san-miguel-ixtapan-tbn.jpg/', ruta: '/san-miguel-ixtapan'},
        { nombre: 'Zona arqueológica de Tenayuca I y II', imagen: 'assets/img/edomex-img/Tenayuca-I-y-II-tbn.jpg', ruta: '/tenayuca-l-ll'},
        { nombre: 'Zona arqueológica de Teotenango', imagen: 'assets/img/edomex-img/teotenango-hr.jpeg', ruta: '/teotenango'},
        { nombre: 'Zona arqueológica de Teotihuacan', imagen: 'assets/img/edomex-img/teotihuacan-tbn.jpg', ruta: '/teotihuacan'},
        { nombre: 'Zona arqueológica de Tetzcotzingo', imagen: 'assets/img/edomex-img/Tetzcotzinco-tbn.jpg', ruta: '/tetzcotzingo'},
        { nombre: 'Zona arqueológica de Tlapacoya', imagen: 'assets/img/edomex-img/Tlapacoya-hr.jpg', ruta: '/tlapacoya'},
        { nombre: 'Zona arqueológica de Tocuila', imagen: 'assets/img/edomex-img/Tocuila-thr.jpg', ruta: '/tocuila'},
        { nombre: 'Zona arqueológica de Santa Cecila Acatitlán', imagen: 'assets/img/edomex-img/Santa-cecilia-alcatitlan-tbn.jpg', ruta: '/santa-cecila-acatitlan'},
        { nombre: 'Zona arqueológica de Ocoyoacac', imagen: 'assets/img/edomex-img/Ocoyoacac-tbn.jpg', ruta: '/ocoyoacac'},
      ],
      currentPage: 1,
      itemsPerPage: 4,
    },
    {
      nombre: 'Guerrero',
      zonas: [
        { nombre: 'Zona arqueológica de Querende', imagen: 'assets/img/guerrero-img/querende-tbn.jpg', ruta: '/querende'},
        { nombre: 'Zona arqueológica Soledad de Maciel', imagen: 'assets/img/guerrero-img/soma-tbn.jpeg', ruta: '/soma'},
        { nombre: 'Zona arqueológica Huamuxtitlán', imagen: 'assets/img/guerrero-img/huamuxtitlan-tbn.jpg', ruta: '/huamuxtitlan'},
        { nombre: 'Zona arqueológica Ixcateopan', imagen: 'assets/img/guerrero-img/ixcateopan-tbn.jpg', ruta: '/ixcateopan'},
        { nombre: 'Zona arqueológica Xochipala', imagen: 'assets/img/guerrero-img/xochipala-tbn.jpg', ruta: '/xochipala'},
        { nombre: 'Zona arqueológica La Sabana', imagen: 'assets/img/guerrero-img/sabana-tbn.jpeg', ruta: '/la-sabana'},
        { nombre: 'Zona arqueológica Los Tepoltzis', imagen: 'assets/img/guerrero-img/tepoltzis-tbn.jpg', ruta: '/los-tepoltzis'},
        { nombre: 'Zona arqueológica Palma Sola', imagen: 'assets/img/guerrero-img/palma-sola-tbn.jpeg', ruta: '/palma-sola'},
        { nombre: 'Zona arqueológica de Tehuacalco', imagen: 'assets/img/guerrero-img/tehuacalco-tbn.jpg', ruta: '/tehuacalco'},
        { nombre: 'Zona arqueológica de Teopantecuanitlán', imagen: 'assets/img/guerrero-img/teopantecuanitlan-tbn.jpeg', ruta: '/teopantecuanitlan'},
      ],
      currentPage: 1,
      itemsPerPage: 5,
    },
    {
      nombre: 'Morelos',
      zonas: [
        { nombre: 'Zona Arqueologica de Olintepec', imagen: 'assets/img/morelos-img/olintepec-tbn.jpeg', ruta: '/olintepec'},
        { nombre: 'Zona Arqueologica de Chalcatzingo', imagen: 'assets/img/morelos-img/chalcatzingo-tbn.jpg', ruta: '/chalcatzingo'},
        { nombre: 'Zona Arqueologica de Coatetelco', imagen: 'assets/img/morelos-img/coatetelco-tbn.jpg', ruta: '/coatetelco'},
        { nombre: 'Zona Arqueologica Las Pilas', imagen: 'assets/img/morelos-img/pilas-tbn.jpeg', ruta: '/las-pilas'},
        { nombre: 'Zona Arqueologica de Teopanzolco', imagen: 'assets/img/morelos-img/teopanzolco-tbn.jpg', ruta: '/teopanzolco'},
        { nombre: 'Zona Arqueologica de Tepozteco', imagen: 'assets/img/morelos-img/tepozteco-tbn.jpg', ruta: '/tepozteco'},
        { nombre: 'Zona Arqueologica de Xochicalco', imagen: 'assets/img/morelos-img/xochicalco-tbn.jpg', ruta: '/xochicalco'},
        { nombre: 'Zona Arqueologica de Yautepec', imagen: 'assets/img/morelos-img/yautepec-tbn.jpeg', ruta: '/yautepec'},
      ],
      currentPage: 1,
      itemsPerPage: 4,
    },
    {
      nombre: 'Tabasco',
      zonas: [
        { nombre: 'Zona Arqueologica de Comalcalco', imagen: 'assets/img/tabasco-img/comalcalco-tbn.png', ruta: '/comalcalco'},
        { nombre: 'Zona Arqueologica La Venta', imagen: 'assets/img/tabasco-img/la-venta-tbn.png', ruta: '/la-venta'},
        { nombre: 'Zona Arqueologica Malpasito', imagen: 'assets/img/tabasco-img/malpasito-tbn.png', ruta: '/malpasito'},
        { nombre: 'Zona Arqueologica Moral-Reforma', imagen: 'assets/img/tabasco-img/moral-reforma-tbn.png', ruta: '/moral-reforma'},
        { nombre: 'Zona Arqueologica Pomoná', imagen: 'assets/img/tabasco-img/pomona-tbn.png', ruta: '/pomona'},
      ],
      currentPage: 1,
      itemsPerPage: 5,
    },
    {
      nombre: 'Veracruz',
      zonas: [
        { nombre: 'Zona Arqueologica Castillo de Teayo', imagen: 'assets/img/veracruz-img/casteayo-tbn.jpeg', ruta: '/casteayo'},
        { nombre: 'Zona arqueológica de Cempoala', imagen: 'assets/img/veracruz-img/cempoala-tbn.jpg', ruta: '/cempoala'},
        { nombre: 'Zona arqueológica el Cuajilote', imagen: 'assets/img/veracruz-img/cuajilote-tbn.jpeg', ruta: '/cuajilote'},
        { nombre: 'Zona arqueológica Cuyuxquihui', imagen: 'assets/img/veracruz-img/cuyuxquihui-tbn.jpeg', ruta: '/cuyuxquihui'},
        { nombre: 'Zona arqueológica El Tajín', imagen: 'assets/img/veracruz-img/tajin-tbn.JPG', ruta: '/el-tajin'},
        { nombre: 'Zona arqueológica Las Higueras', imagen: 'assets/img/veracruz-img/las-higueras-tbn.jpg', ruta: '/las-higueras'},
        { nombre: 'Zona arqueológica Quiahuiztlán', imagen: 'assets/img/veracruz-img/quianhuiztlan-tbn.png', ruta: '/quianhuiztlan'},
        { nombre: 'Zona arqueológica San Lorenzo Tenochtitlan', imagen: 'assets/img/veracruz-img/sanloten-tbn.jpg', ruta: '/sanloten'},
        { nombre: 'Zona arqueológica Tres Zapotes', imagen: 'assets/img/veracruz-img/tres-zapotes-tbn.jpg', ruta: '/tres-zapotes'},
        { nombre: 'Zona arqueológica Vega de la Peña', imagen: 'assets/img/veracruz-img/vedelape-tbn.jpeg', ruta: '/vedelape'},
      ],
      currentPage: 1,
      itemsPerPage: 5,
    },
  ];

  nextPage(estado: any) {
    if (estado.currentPage < this.calculateTotalPages(estado)) {
      estado.currentPage++;
    }
  }

  prevPage(estado: any) {
    if (estado.currentPage > 1) {
      estado.currentPage--;
    }
  }

  calculateTotalPages(estado: any): number {
    return Math.ceil(estado.zonas.length / estado.itemsPerPage);
  }

  constructor(private router: Router) {}

  redirectToZona(zona: any, estado: any) {
    this.router.navigateByUrl(zona.ruta, { state: { zona: zona } });
  }

  //Quintana Roo
  redirectToElRey() {
    this.router.navigateByUrl('/el-rey');
  }
  redirectToElMeco(){
    this.router.navigateByUrl('/el-meco');
  }
  redirectToSanGervasio(){
    this.router.navigateByUrl('/san-gervasio');
  }
  redirectToXelHa(){
    this.router.navigateByUrl('/xelha');
  }
  redirectToCoba(){
    this.router.navigateByUrl('/coba');
  }
  redirectToTulum(){
    this.router.navigateByUrl('/tulum');
  }
  redirectToEkBalam(){
    this.router.navigateByUrl('/ek-balam');
  }
  redirectToChichen(){
    this.router.navigateByUrl('/chichen-itza');
  }
  redirectToIzamal(){
    this.router.navigateByUrl('/izamal');
  }
  redirectToAke(){
    this.router.navigateByUrl('/ake');
  }
  redirectToXcambo(){
    this.router.navigateByUrl('/xcambo');
  }
  redirectToDzibilchaltun(){
    this.router.navigateByUrl('/dzibilchaltun');
  }
  redirectToHome(){
    this.router.navigateByUrl('/home')
  }

  redirectToSearch(){
    this.router.navigateByUrl('/search')
  }
}
