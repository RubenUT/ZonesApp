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
  selector: 'app-santa-cecila-acatitlan',
  templateUrl: './santa-cecila-acatitlan.page.html',
  styleUrls: ['./santa-cecila-acatitlan.page.scss'],
})
export class SantaCecilaAcatitlanPage implements OnInit {

  map = null;
  constructor(private router: Router) { }


  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    // create LatLng object
    const myLatLng = {lat:  19.5526018, lng: -99.1733925};
    // create map           19.5526018 -99.1733925
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 16
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat:  19.5526018,
          lng: -99.1733925
        },
        title : 'Zona arqueologica de Santa Cecilia acatitlan'
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
