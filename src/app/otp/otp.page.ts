import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  redirectToOnboarding() {
    this.route.navigate(['/onboarding']);
  }

}
