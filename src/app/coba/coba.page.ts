import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coba',
  templateUrl: './coba.page.html',
  styleUrls: ['./coba.page.scss'],
})
export class CobaPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToCobaAR(){
    window.open('assets/coba-ar.html');
  }
  ngOnInit() {
  }

}
