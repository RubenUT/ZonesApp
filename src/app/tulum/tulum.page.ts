import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tulum',
  templateUrl: './tulum.page.html',
  styleUrls: ['./tulum.page.scss'],
})
export class TulumPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToTulumRA(){
    window.open('assets/tulum-ar.html')
  }

  ngOnInit() {
  }

}
