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
    },
    // ... otros estados
  ];

  itemsPerPage = 4;
  currentPage = 1;

  get totalPages() {
    return Math.ceil(this.estados.reduce((total, estado) => total + estado.zonas.length, 0) / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
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
}
