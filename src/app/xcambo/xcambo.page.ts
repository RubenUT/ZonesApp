import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-xcambo',
  templateUrl: './xcambo.page.html',
  styleUrls: ['./xcambo.page.scss'],
})
export class XcamboPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToXcamboRA(){
    window.open('assets/xcambo-ar.html')
  }

  ngOnInit() {
  }

}
