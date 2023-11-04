import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xelha',
  templateUrl: './xelha.page.html',
  styleUrls: ['./xelha.page.scss'],
})
export class XelhaPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToXelhaRA(){
    window.open('assets/xelha-ar.html');
  }
  ngOnInit() {
  }

}
