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
    const myLatLng = {lat: 20.891944, lng: -88.135998};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 16
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat: 20.892309,
          lng: -88.13593
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

  redirectToEkBalamRA(){
    window.open('assets/ekbalam-ar.html');
  }

  ngOnInit() {
    this.loadMap();
  }

}
