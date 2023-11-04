import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-izamal',
  templateUrl: './izamal.page.html',
  styleUrls: ['./izamal.page.scss'],
})
export class IzamalPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToizamalRA(){
    window.open('assets/izamal-ar.html');
  }

  ngOnInit() {
  }

}
