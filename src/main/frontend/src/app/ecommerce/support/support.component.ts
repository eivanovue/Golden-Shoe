import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  isReturnsCollapsed: boolean = false;
  isReturnsStatusCollapsed: boolean = false;
  isDeliveryCollapsed: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
