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
  selector: 'app-tres-cerritos',
  templateUrl: './tres-cerritos.page.html',
  styleUrls: ['./tres-cerritos.page.scss'],
})
export class TresCerritosPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = {lat: 19.96093485592338, lng: -101.10531493333416};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat: 19.96093485592338,
          lng: -101.10531493333416
        },
        title : 'Zona arqueologica Tres Cerritos'
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