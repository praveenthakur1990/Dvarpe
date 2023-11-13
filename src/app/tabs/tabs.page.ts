import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 
  redirectToHome(){
    this.route.navigate(['/home']);
  }

  redirectToCategoryPage(){
    this.route.navigate(['tabs/category']);
  }

  redirectToCartPage(){
    this.route.navigate(['/cart']);
  }

  redirectToMyAccountPage(){
    this.route.navigate(['/myaccount']);
  }
}
