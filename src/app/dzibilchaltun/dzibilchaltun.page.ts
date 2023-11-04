import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dzibilchaltun',
  templateUrl: './dzibilchaltun.page.html',
  styleUrls: ['./dzibilchaltun.page.scss'],
})
export class DzibilchaltunPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToDtAR(){
    window.open('assets/dz-ar.html');
  }

  ngOnInit() {
  }

}
