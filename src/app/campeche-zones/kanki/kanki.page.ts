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
  selector: 'app-kanki',
  templateUrl: './kanki.page.html',
  styleUrls: ['./kanki.page.scss'],
})
export class KankiPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat: 19.998587373779205, lng: -90.11080981669498};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat: 19.998587373779205,
          lng: -90.11080981669498
        },
        title : 'Zona arqueologica de Kanki'
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

  ngOnInit() {
    this.loadMap();
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
