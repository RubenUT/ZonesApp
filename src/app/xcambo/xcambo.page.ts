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
  selector: 'app-xcambo',
  templateUrl: './xcambo.page.html',
  styleUrls: ['./xcambo.page.scss'],
})
export class XcamboPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = {lat: 21.3134963, lng: -89.3540942}; 
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 18
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat:  21.3134963,
          lng: -89.3540942
        },
        title : 'Zona arqueologica de Xcambo'
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
