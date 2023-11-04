import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
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
