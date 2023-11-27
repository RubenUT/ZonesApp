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
  selector: 'app-palenque',
  templateUrl: './palenque.page.html',
  styleUrls: ['./palenque.page.scss'],
})
export class PalenquePage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = {lat: 17.484769683429622, lng: -92.04593781983233};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat: 17.484769683429622,
          lng: -92.04593781983233
        },
        title : 'Zona arqueologica de Palenque'
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