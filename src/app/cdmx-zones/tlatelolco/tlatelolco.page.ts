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
  selector: 'app-tlatelolco',
  templateUrl: './tlatelolco.page.html',
  styleUrls: ['./tlatelolco.page.scss'],
})
export class TlatelolcoPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = {lat: 19.4512852, lng: -99.1375018}; 
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 17
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat:  19.4512852,
          lng: -99.1375018
        },
        title : 'Zona arqueologica de tlatelolco'
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
