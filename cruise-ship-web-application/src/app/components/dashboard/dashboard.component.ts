import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/bar.jpg',
    };
    this.slides[1] = {
      src: './assets/img/cafe.jpg',
    }
    this.slides[2] = {
      src: './assets/img/gym.jpg',
    }
  }

}
