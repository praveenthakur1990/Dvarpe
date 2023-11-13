import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public segment: string = "vegetables";
  constructor() { }

  ngOnInit() {
  }

  
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
