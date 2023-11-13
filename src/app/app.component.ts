import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tabs/home', icon: 'home' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor() { }
}
