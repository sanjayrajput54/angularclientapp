import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  activation = 'home';
  constructor() { }

  ngOnInit() {
  }

  getActiveWindow(name) {
    this.activation = name;
  }

}
