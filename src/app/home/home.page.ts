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

  //Baja California
  redirectToVallecito(){
    this.router.navigateByUrl('/el-vallecito')
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
