import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  redirectToHome(){
    this.route.navigate(['/home']);
  }
}
