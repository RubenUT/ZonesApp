import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-san-gervasio',
  templateUrl: './san-gervasio.page.html',
  styleUrls: ['./san-gervasio.page.scss'],
})
export class SanGervasioPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToSanGerRA(){
    window.open('assets/sanger-ar.html');
  }
  ngOnInit() {
  }

}
