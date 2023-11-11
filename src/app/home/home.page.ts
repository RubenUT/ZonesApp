import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  //Baja California
  redirectToVallecito(){
    this.router.navigateByUrl('/el-vallecito')
  }

  //Campeche
  redirectToBalamku(){
    this.router.navigateByUrl('/balamku')
  }
  redirectToBecan(){
    this.router.navigateByUrl('/becan')
  }
  redirectToCalakmul(){
    this.router.navigateByUrl('/calakmul')
  }
  redirectToChunhuhub(){
    this.router.navigateByUrl('/chunhuhub')
  } 
  redirectToChicanna(){
    this.router.navigateByUrl('/chicanna')
  }
  redirectToDzibilnocac(){
    this.router.navigateByUrl('/dzibilnocac')
  }
  redirectToEdzna(){
    this.router.navigateByUrl('/edzna')
  }
  redirectToElTigre(){
    this.router.navigateByUrl('/el-tigre')
  }
  redirectToHochob(){
    this.router.navigateByUrl('/hochob')
  }
  redirectToHormiguero(){
    this.router.navigateByUrl('/el-hormiguero')
  }
  redirectToKanki(){
    this.router.navigateByUrl('/kanki')
  }
  redirectToSanRoxta(){
    this.router.navigateByUrl('/sanroxta')
  }
  redirectToTabasqueno(){
    this.router.navigateByUrl('/tabasqueno')
  }
  redirectToTohcok(){
    this.router.navigateByUrl('/tohcok')
  }
  redirectToXcalumkin(){
    this.router.navigateByUrl('/xcalumkin')
  }
  redirectToXpuhil(){
    this.router.navigateByUrl('/xpuhil')
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
