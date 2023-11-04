import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ake',
  templateUrl: './ake.page.html',
  styleUrls: ['./ake.page.scss'],
})
export class AkePage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToAkeRA(){
    window.open('assets/ake-ra.html')
  }
  ngOnInit() {
  }

}
