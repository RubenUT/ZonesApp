import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-el-meco',
  templateUrl: './el-meco.page.html',
  styleUrls: ['./el-meco.page.scss'],
})
export class ElMecoPage implements OnInit {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  redirectToElMecoRA(){
    window.open('assets/elmeco-ar.html');
  }
  ngOnInit() {
  }

}
