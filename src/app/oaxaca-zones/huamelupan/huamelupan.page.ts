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
  selector: 'app-huamelupan',
  templateUrl: './huamelupan.page.html',
  styleUrls: ['./huamelupan.page.scss'],
})
export class HuamelupanPage implements OnInit {

  map = null;
  constructor(private router: Router) {}

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = {lat: 17.3979276, lng: -97.5990828}; 
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 14
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position : {
          lat:  17.3979276,
          lng: -97.5990828
        },
        title : 'Zona arqueologica de Huamelulpan'
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
