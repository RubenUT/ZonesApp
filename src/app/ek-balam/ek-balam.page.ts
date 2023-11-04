import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google:any;
@Component({
  selector: 'app-ek-balam',
  templateUrl: './ek-balam.page.html',
  styleUrls: ['./ek-balam.page.scss'],
})
export class EkBalamPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  redirectToEkBalamRA(){
    window.open('assets/ekbalam-ar.html');
  }

  ngOnInit() {
    this.loadMap();
  }

}
