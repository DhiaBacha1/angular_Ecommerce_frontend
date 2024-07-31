import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    { image: 'assets/images/img1.jpg' },
    { image: 'assets/images/img2.jpg' },
    { image: 'assets/images/img3.jpg' }
  ];
  ngOnInit() {
    console.log('Slides:', this.slides);
  }
}

