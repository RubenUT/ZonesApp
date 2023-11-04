import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-el-rey',
  templateUrl: './el-rey.page.html',
  styleUrls: ['./el-rey.page.scss'],
})
export class ElReyPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToElReyRA(){
    window.open('assets/elrey-ar.html');
  }
  ngOnInit() {
  }

}
