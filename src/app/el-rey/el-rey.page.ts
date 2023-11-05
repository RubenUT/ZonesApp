import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google:any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-el-rey',
  templateUrl: './el-rey.page.html',
  styleUrls: ['./el-rey.page.scss'],
})
export class ElReyPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: 21.059251, lng: -86.781508};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat: 21.059251,
          lng: -86.781508
        },
        title : 'Zona arqueologica de Ek Balam'
      }
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToElReyRA(){
    window.open('assets/elrey-ar.html');
  }
  ngOnInit() {
    this.loadMap();
  }

}
