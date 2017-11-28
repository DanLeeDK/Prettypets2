import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageTitle = 'Welcome to Pretty Pets';
  img = '../../assets/images/Dogs.jpg';
  constructor() { }

  ngOnInit() {
  }

}
