import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chichen-itza',
  templateUrl: './chichen-itza.page.html',
  styleUrls: ['./chichen-itza.page.scss'],
})
export class ChichenItzaPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToChichenRA(){
    window.open('assets/chichen-ar.html');
  }

  ngOnInit() {
  }

}
